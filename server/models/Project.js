const mongoose = require('mongoose');

const projectxSchema = new mongoose.Schema({
    nameprojectx: {
        type: String,
        require: true,
    },
    img: {
        type: String,
        require: true,
    },
    strategy: {
        type: String,
        require: true,
    },
    investors: {
        type: String,
        require: true,
    },
    lengthjob: {
        type: String,
        require: true,
    },
});

const Project = mongoose.model('projectx', projectxSchema);

exports.Project = Project;