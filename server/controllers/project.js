const { Project } = require('../models/Project');
const joi = require('joi');

module.exports = {
    getAll: async function (req, res, next) {
        try {
            const result = await Project.find({}).sort({ "projectx": 1 });
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting projectx' });
        }
    },

    getItem: async function (req, res, next) {
        try {
            const scheme = joi.object({
                _id: joi.string().required(),
            });

            const { error, value } = scheme.validate({ _id: req.params.id });

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const result = await Project.findOne({ _id: value._id });
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error get the projectx" });
        }
    },

    add: async function (req, res, next) {
        try {
            const scheme = joi.object({
                nameprojectx: joi.string().required(),
                img: joi.string().required(),
                strategy: joi.string().required(),
                investors: joi.string().required(),
                lengthjob: joi.string().required(),
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const newProjectx = new Project(value);
            const result = await newProjectx.save();

            res.json({
                ...value,
                _id: result._id
            });
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error add projectx" });
        }
    },

    delete: async function (req, res, next) {
        try {
            const scheme = joi.object({
                _id: joi.string().required(),
            });

            const { error, value } = scheme.validate({ _id: req.params.id });

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const deleted = await Project.findOne({ _id: value._id });

            await projectx.deleteOne(value).exec();
            res.json(deleted);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error delete Projectx" });
        }
    },

    edit: async function (req, res, next) {
        try {
            const scheme = joi.object({
                nameprojectx: joi.string().required(),
                img: joi.string().required(),
                strategy: joi.string().required(),
                investors: joi.string().required(),
                lengthjob: joi.string().required(),
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const projectx = await Project.findOneAndUpdate({
                _id: req.params.id
            }, value);

            if (!projectx) return res.status(404).send('Given ID was not found.');

            const updated = await Project.findOne({ _id: req.params.id });
            res.json(updated);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "fail to update data" });
        }
    },
}