import { model, Schema } from "mongoose";

const messageSchema = new Schema({
    text: String,
    createdAt: String,
    createdBy: String
});

//module.exports = model('Message', messageSchema);

export default model('Message', messageSchema)