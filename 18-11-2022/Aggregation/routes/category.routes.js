const router = require('express').Router()
const categoryController = require('../controllers/category.controller')

router.get('/add-category', categoryController.showCategory)
router.post('/create-category', categoryController.addCategory)
router.get('/view-category', categoryController.viewCategory)

module.exports = router
