const router = require('express-promise-router')();
const clientController = require('../controllers/client.controller');

router.get('/getClients', clientController.getClients);
router.put('/newClient', clientController.newClient);
router.post('/getClient', clientController.getClient);
router.post('/editClient', clientController.editClient);
module.exports = router;