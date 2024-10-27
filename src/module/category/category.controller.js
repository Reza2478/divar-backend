const autoBind = require("auto-bind");
const CategoryService = require("../../module/category/category.service");
const {categoryMessage} = require("./category.message");

class CategoryController {
    #service;

    constructor() {
        autoBind(this)
        this.#service = CategoryService
    }

    async create(req, res, next) {
        const {name, icon, slug, parent} = req.body;
        try {
            await this.#service.create({name, icon, slug, parent})
            res.status(201).json({
                message: categoryMessage.created
            })
        } catch (error) {
            next(error);
        }
    }

    async find(req, res, next) {
        try {
            const categories = await this.#service.find()
            res.status(200).json(categories)
        } catch (error) {
            next(error);
        }
    }
}


module.exports = new CategoryController();