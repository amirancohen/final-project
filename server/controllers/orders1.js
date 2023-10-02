const { Order } = require('../models/Order');
const joi = require('joi');

module.exports = {

    getAll: async function (req, res, next) {
        try {
            const result = await Order.find({}).sort({ "orders": 1 });
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting orders' });
        }
    },
    add: async function (req, res, next) {
        try {
            const scheme = joi.object({
                fullname: joi.string().required(),
                phone: joi.string().optional().allow(''),
                email: joi.string().required(),
                facebook: joi.string(),
                fileup: joi.string().required(),
                textarea: joi.string().required(),
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const newOrder = new Order(value);
            const result = await newOrder.save();

            res.json({
                ...value,
                _id: result._id
            });
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error add order" });
        }
    },
}

// delete: async function (req, res, next) {
//     try {
//         const scheme = joi.object({
//             _id: joi.string().required(),
//         });

//         const { error, value } = scheme.validate({ _id: req.params.id });

//         if (error) {
//             console.log(error.details[0].message);
//             res.status(400).json({ error: "invalid data" });
//             return;
//         }

//         const deleted = await Order.findOne({ _id: value._id });

//         await Order.deleteOne(value).exec();
//         res.json(deleted);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(400).json({ error: "error delete order" });
//     }
// }