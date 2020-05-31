const db = require("../config/database");

exports.getClients = async (req, res) => {
    console.log("getClients");
    const response = await db.query('SELECT * from clients');
    res.status(200).send(response.rows);
};

exports.getClient = async (req, res) => {
    console.log(req.body.id);
    const id = parseInt(req.body.id);
    const response = await db.query('SELECT * from clients where id=$1',[id]);
    res.status(200).send(response.rows);
};

exports.newClient = async (req, res) => {
    let body = req.body;
    await db.query('INSERT into clients ("name", "phone") values ($1,$2)',[body.name,body.phone]).then(()=>{
        res.status(200).send("ok");
    });

};
exports.editClient = async (req, res) => {
    let body = req.body;
    await db.query('UPDATE clients set "name"=$1, "phone"= $2 where id=$3',[body.name,body.phone,body.id]).then(()=>{
        res.status(200).send("ok");
    });

};