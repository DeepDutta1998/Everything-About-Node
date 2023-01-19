const router = require('express').Router()
const crudApiControllers = require('../controller/crudApi.controller')

router.get('/', crudApiControllers.showMessage)


module.exports=router