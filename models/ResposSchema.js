var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReposSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    git: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true
    },
    releases: [{
        version: String,
        date: Date
    }],
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = ReposSchema;
