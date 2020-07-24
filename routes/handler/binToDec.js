const Validator = require('fastest-validator');
const v = new Validator();

module.exports = (req, res) => {
    const binary = req.body.bin
    let decimal = 0;

    const schema = { bin: 'string|empty:false' }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    for (let i = 0; i < binary.length; i++) {
        if (binary[binary.length - (i + 1)] === '1') {
            decimal += 2 ** i;
        }
    }

    return res.json({
        status: 'success',
        binary: decimal
    })
}