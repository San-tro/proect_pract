const router = require('express-promise-router')();
const lab4Controller = require('../controllers/lab4.controller');

router.get('/textchange', lab4Controller.changeText);
module.exports = router;