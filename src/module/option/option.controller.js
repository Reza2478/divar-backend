const autoBind = require("auto-bind");
const ServiceController = require("../option/option.service")
const OptionMessage = require("./option.message");


class OptionController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = ServiceController
    }

    async create(req, res, next) {
        try {
            const {title, category, key, type, enum: list, guid} = req.body;
            await this.#service.create({title, category, key, type, enum: list, guid});
            return res.status(201).json({
                message: OptionMessage.create
            })
        } catch (error) {
            next(error)
        }
    }

    async find(req, res, next) {
        try {
            const options = await this.#service.find()
            res.status(200).json(options)
        } catch (error) {
            next(error);
        }
    }

    async findById(req, res, next) {
        try {
            const {id} = req.params;
            const option = await this.#service.findById(id)
            res.status(200).json(option)
        } catch (error) {
            next(error);
        }
    }

    async removeById(req, res, next) {
        try {
            const {id} = req.params;
            await this.#service.removeById(id)
            res.status(200).json({
                message: OptionMessage.remove
            })
        } catch (error) {
            next(error);
        }
    }

    async findByCategoryId(req, res, next) {
        try {
            const {categoryId} = req.params;
            const options = await this.#service.findByCategoryId(categoryId)
            res.status(200).json(options)
        } catch (error) {
            next(error);
        }
    }

    async findByCategorySlug(req, res, next) {
        try {
            const {slug} = req.params;
            const options = await this.#service.findByCategorySlug(slug)
            res.status(200).json(options)
        } catch (error) {
            next(error)
        }

    }


}

module.exports = new OptionController();