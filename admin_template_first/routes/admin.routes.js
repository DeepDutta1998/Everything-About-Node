const router = require('express').Router();
const adminController = require('../controllers/admin.controller')
router.get('/', adminController.showIndex);
router.get('/dashboard', adminController.dashboard);
router.get('/template', adminController.template);



module.exports = router;