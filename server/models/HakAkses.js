import { model, Schema } from "mongoose";

const hakAksesSchema = new Schema({
    kode: { type: String, unique: true },
    nama: { type: String, default: null },
    status: { type: String },
});

//module.exports = model('Message', messageSchema);

export default model('accesses', hakAksesSchema)