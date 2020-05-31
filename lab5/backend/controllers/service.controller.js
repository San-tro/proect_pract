
const db = require("../config/database");

exports.getServices = async (req, res) => {
    console.log("getServices");
    const response = await db.query('SELECT * from services');
    res.status(200).send(response.rows);
};

exports.getService = async (req, res) => {
    console.log(req.body.id);
    const id = parseInt(req.body.id);
    const response = await db.query('SELECT * from services where id=$1',[id]);
    res.status(200).send(response.rows);
};

exports.newService = async (req, res) => {
    let body = req.body;
    await db.query('INSERT into services ("name", "price") values ($1,$2)',[body.name,body.price]).then(()=>{
        res.status(200).send("ok");
    });

};
exports.editService= async (req, res) => {
    let body = req.body;
    await db.query('UPDATE clients set "name"=$1, "phone"= $2 where id=$3',[body.name,body.price,body.id]).then(()=>{
        res.status(200).send("ok");
    });

};