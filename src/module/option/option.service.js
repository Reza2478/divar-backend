const autoBind = require("auto-bind");
const OptionModel = require("./option.model");
const CategoryService = require("../category/category.service")
const createHttpError = require("http-errors");
const OptionMessage = require("./option.message")
const slugify = require("slugify");
const {IsTrue, IsFalse} = require("../../common/utils/functions");
const {isValidObjectId} = require("mongoose");

class OptionService {
    #model;
    #categoryService

    constructor() {
        autoBind(this)
        this.#model = OptionModel;
        this.#categoryService = CategoryService;
    }

    async create(optionDto) {
        const category = await this.#categoryService.checkExistById(optionDto.category)
        optionDto.category = category._id;
        optionDto.key = slugify(optionDto.key, {trim: true, lower: true, replacement: "_"});
        await this.alreadyExistByCategoryAndKey(category._id, optionDto.key)

        if (IsTrue(optionDto?.required)) optionDto.required = true;
        if (IsFalse(optionDto?.required)) optionDto.required = false;

        // for handle enum when use swagger for urlEncoded type
        if (optionDto?.enum && typeof optionDto.enum === "string") {
            optionDto.enum = optionDto.enum.split(",")
        } else if (!Array.isArray(optionDto.enum)) optionDto.enum = []
        const option = await this.#model.create(optionDto)
        return option
    }

    async update(id, optionDto) {
        const existOption = await this.checkExistById(id)
        if (optionDto && isValidObjectId(optionDto.category)) {
            const category = await this.#categoryService.checkExistById(optionDto.category)
            optionDto.category = category._id;

        } else {
            delete optionDto.category
        }

        if (optionDto.key) {
            optionDto.key = slugify(optionDto.key, {trim: true, lower: true, replacement: "_"});
            let categoryId= existOption.category
            if(optionDto.category) categoryId = optionDto.category
            await this.alreadyExistByCategoryAndKey(categoryId, optionDto.key)
        }

        if (IsTrue(optionDto?.required)) optionDto.required = true;
        else if (IsFalse(optionDto?.required)) optionDto.required = false;
        else delete optionDto.required

        // for handle enum when use swagger for urlEncoded type
        if (optionDto?.enum && typeof optionDto.enum === "string") {
            optionDto.enum = optionDto.enum.split(",")
        } else if (!Array.isArray(optionDto.enum)) delete optionDto.enum

        console.log("optionDto===>", optionDto)
        return await this.#model.updateOne({_id: id}, {$set: optionDto})
    }

    async find() {
        const options = await this.#model.find({}, {__v: 0}, {sort: {_id: -1}}).populate([{
            path: "category", select: {name: 1, slug: 1}
        }])
        return options
    }

    async findById(id) {
        const option = await this.#model.findById(id, {__v: 0}).populate([{
            path: "category", select: {name: 1, slug: 1}
        }])
        return option
    }

    async findByCategoryId(category) {
        const options = await this.#model.find({category}, {__v: 0}).populate([{
            path: "category", select: {name: 1, slug: 1}
        }])
        return options
    }

    async removeById(id) {
        await this.checkExistById(id)
        return await this.#model.deleteOne({_id: id})
    }

    async findByCategorySlug(slug) {
        const options = await this.#model.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: 'category'
                }
            },
            {
                $unwind: "$category"
            },
            {
                $addFields: {
                    categorySlug: "$category.slug",
                    categoryName: "$category.name",
                    categoryIcon: "$category.icon",
                }
            },
            {
                $project: {
                    category: 0,
                    __v: 0
                }
            },
            {
                $match: {
                    categorySlug: slug
                }
            }
        ])

        return options
    }

    async checkExistById(id) {
        const option = await this.#model.findById(id)
        if (!option) throw new createHttpError(404, OptionMessage.notFoundOption)
        return option
    }

    async alreadyExistByCategoryAndKey(category, key) {
        const isExist = await this.#model.findOne(category, key)
        if (isExist) throw new createHttpError(409, OptionMessage.alreadyExist)
        return null
    }

}

module.exports = new OptionService();