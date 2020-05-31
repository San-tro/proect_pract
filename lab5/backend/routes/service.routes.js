const router = require('express-promise-router')();
const serviceController = require('../controllers/service.controller');

router.get('/getServices', serviceController.getServices);
router.put('/newService', serviceController.newService);
router.post('/getService', serviceController.getService);
router.post('/editService', serviceController.editService);
module.exports = router;