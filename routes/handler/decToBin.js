const Validator = require('fastest-validator');
const v = new Validator();

module.exports = (req, res) => {
    var temp = req.body.dec;
    var binary = "";

    const schema = { dec: 'number|empty:false' }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    while (temp > 0) {
        if (temp % 2 == 0) {
            binary = "0" + binary;
        }
        else {
            binary = "1" + binary;
        }

        temp = Math.floor(temp / 2);
    }

    return res.json({
        status: 'success',
        binary
    })
}