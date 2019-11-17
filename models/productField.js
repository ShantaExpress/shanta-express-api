var mongoose = require('mongoose');
var Category = require('../models/category');
var SubCategory = require('../models/subCategory');
var SectionalCategory = require('../models/sectionalCategory');
var Brand = require('../models/brand');
var Schema = mongoose.Schema;

var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, required: true},
    fields:{type:Array},
    category_id:{type: Schema.Types.ObjectId,ref: Category,required: true},
    subCategory_id:{type: Schema.Types.ObjectId,ref: SubCategory,required: true},
    sectionalCategory_id:{type: Schema.Types.ObjectId,ref: SectionalCategory,required: true}
}, { usePushEach: true });

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('ProductField', schema);