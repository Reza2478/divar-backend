const {Router} = require('express');
const CategoryController = require("./category.controller")


const router = new Router();

router.get('/', CategoryController.find)
router.post('/', CategoryController.create)

module.exports = {
    CategoryRouter: router
}