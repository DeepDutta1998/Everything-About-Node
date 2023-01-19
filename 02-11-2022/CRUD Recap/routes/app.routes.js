const router = require('express').Router()
const appController = require('../controllers/app.controller')

router.get('/', appController.index)
router.post('/insert',appController.insert)
router.get('/listing',appController.listing)
router.get('/edit/:id',appController.edit)

module.exports = router
