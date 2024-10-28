const {Router} = require('express');

const OptionController = require('./option.controller');

const router = Router();

router.post("/", OptionController.create)
router.get("/", OptionController.find)
router.get("/:id", OptionController.findById)
router.get("/:categoryId", OptionController.findByCategoryId)

module.exports = {
    OptionRouter: router,
};