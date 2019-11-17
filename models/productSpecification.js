var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, required: true},
    identifier: {type: String},
    specifications: {type: Array},
    sectionalCategory_id: {type: String, required: true}
}, { usePushEach: true });

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('ProductSpecification', schema);