const {Schema, Types, model} = require('mongoose');


const OptionSchema = new Schema({
    category: {type: Types.ObjectId, required: true, ref: 'Category'},
    title: {type: String, required: true},
    key: {type: String, required: true},
    type: {type: String, enum: ["number", "string", "array", "boolean"]},
    enum: {type: Array, required: false},
    guid: {type: String, required: false},
    required: {type: Boolean, required: false, default: false},
})

const OptionModel = model("Option", OptionSchema);

module.exports = OptionModel;