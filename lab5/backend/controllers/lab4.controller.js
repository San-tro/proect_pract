request = require('request')

exports.changeText = async (req, res) => {
    request.get(
        {
            url: 'http://www.mocky.io/v2/5c7db5e13100005a00375fda',
        },
        (err, response, body) => {
            if (err) return res.status(500).send({ message: err })
            var oldBody = JSON.parse(body);
            var newResult =  oldBody.result.replace(/\s/ig, "_")
            var newBody ={...oldBody,result : newResult }
            return res.send(newBody)
        }
    )

};