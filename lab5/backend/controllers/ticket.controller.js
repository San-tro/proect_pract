
const db = require("../config/database");

exports.getTickets = async (req, res) => {
    console.log("getTickets");
    const response = await db.query('SELECT clients.name as "client", clients.phone, services.name as "service", services.price from tickets left join services on services.id = tickets.serviceId left join clients on clients.id =tickets.clientId');
    res.status(200).send(response.rows);
};

exports.getTicket = async (req, res) => {
    console.log(req.body.id);
    const id = parseInt(req.body.id);
    const response = await db.query('SELECT * from tickets where id=$1',[id]);
    res.status(200).send(response.rows);
};

exports.newTicket  = async (req, res) => {
    let body = req.body;
    await db.query('INSERT into tickets ("clientId", "serviceId") values ($1,$2)',[body.name,clientId.serviceId]).then(()=>{
        res.status(200).send("ok");
    });

};
exports.editTicket = async (req, res) => {
    let body = req.body;
    await db.query('UPDATE tickets set "clientId"=$1, "serviceId"= $2 where id=$3',[body.clientId,serviceId.price,body.id]).then(()=>{
        res.status(200).send("ok");
    });

};