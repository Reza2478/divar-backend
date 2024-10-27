const autoBind = require("auto-bind");
const CategoryModel = require("./category.model");
const {isValidObjectId, Types} = require("mongoose");
const createHttpError = require("http-errors");
const {categoryMessage} = require("./category.message");
const slugify = require("slugify");


class CategoryService {
    #model

    constructor() {
        autoBind(this)
        this.#model = CategoryModel;
    }

    async create(categoryDto) {
        if (categoryDto?.parent && isValidObjectId(categoryDto.parent)) {
            const existCategory = await this.checkExistById(categoryDto.parent);
            categoryDto.parent = existCategory._id;
            categoryDto.parents = [
                ...new Set(
                    ([existCategory._id.toString()].concat(
                        existCategory.parents.map(item => item._id.toString())
                    )).map(id => new Types.ObjectId(id))
                ),
            ]
        }

        if (categoryDto?.slug) {
            categoryDto.slug = slugify(categoryDto.slug);
            await this.alreadyExistBySlug(categoryDto.slug)
        }else{
            categoryDto.slug = slugify(categoryDto.name);
        }


        console.log("categoryDto ======>" ,categoryDto)

        const category = await this.#model.create(categoryDto);
        return category
    }

    async find() {
    }

    async checkExistById(id) {
        const category = await this.#model.findById(id)
        if (!category) throw new createHttpError(404, categoryMessage.notFound)
        return category
    }

    async alreadyExistBySlug(slug) {
        const category = await this.#model.findOne({slug})
        if (category) throw new createHttpError(409, categoryMessage.alreadyExistSlug)
        return null
    }
}

module.exports = new CategoryService();