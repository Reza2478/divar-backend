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
            await this.#service.create(req.body);
            return res.json({
                message: OptionMessage.create
            })
        } catch (error) {
            next(error)
        }
    }

    async find(req, res, next) {
        try {
            await this.#service.find()
        } catch (error) {
            next(error);
        }
    }

    async findById(req, res, next) {
        try {
            await this.#service.findById()
        } catch (error) {
            next(error);
        }
    }

    async findByCategoryId(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }


}

module.exports = new OptionController();