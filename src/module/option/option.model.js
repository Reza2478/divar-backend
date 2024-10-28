import mongoose, {model, Types} from "mongoose";


const OptionSchema = new mongoose.Schema({
    category: {type: Types.ObjectId, required: true},
    title: {type: String, required: true},
    key: {type: String, required: true},
    type: {type: String, enum: ["number", "string", "array", "boolean"]},
    enum: {type: Array, required: false},
    guid: {type: String, required: false},
})

const OptionModel = model("Option", OptionSchema);

module.exports = OptionModel;