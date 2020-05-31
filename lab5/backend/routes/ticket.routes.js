const router = require('express-promise-router')();
const ticketController = require('../controllers/ticket.controller');

router.get('/getTickets', ticketController.getTickets);
router.put('/newService', ticketController.newTicket);
router.post('/getTicket', ticketController.getTicket);
router.post('/editTicket', ticketController.editTicket);
module.exports = router;

module.exports = router;