import { model, Schema } from "mongoose";

const userSchema = new Schema({
    nama: { type: String, default: null },
    nik: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
    role_id: String,
    role_access: String,
    val_date: String,
    branch_name: String,
    departemen: String
});

//module.exports = model('Message', messageSchema);

export default model('user', userSchema)