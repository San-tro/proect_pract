var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();


const index = require('./routes/index');

const lab4Route = require('./routes/lab4.routes');
const clientRoute = require('./routes/client.routes');
const ticketRoute = require('./routes/ticket.routes');
const serviceRoute = require('./routes/service.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors())
app.use(index);

app.use('/api/', lab4Route);
app.use('/api/', clientRoute);
app.use('/api/', ticketRoute);
app.use('/api/', serviceRoute);
app.listen(3001,function()
{
    console.log('API app started')
})



module.exports = app;