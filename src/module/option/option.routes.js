const {Router} = require('express');

const OptionController = require('./option.controller');

const router = Router();

router.post("/", OptionController.create)
router.get("/", OptionController.find)
router.get("/:id", OptionController.findById)
router.get("/by-category/:categoryId", OptionController.findByCategoryId)
router.get("/by-category-slug/:slug", OptionController.findByCategorySlug)
router.delete("/:id", OptionController.removeById)

module.exports = {
    OptionRouter: router,
};