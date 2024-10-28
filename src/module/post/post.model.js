import mongoose, {model, Types} from "mongoose";


const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: Types.ObjectId, required: true},
    province: {type: String, required: true},
    city: {type: String, required: true},
    district: {type: String, required: true},
    coordinate: {type: [Number], required: true},
    images: {type: [String], required: false, default: []}
})

const PostModel = model("Post", PostSchema);

module.exports = PostModel;