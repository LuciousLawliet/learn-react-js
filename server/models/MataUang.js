import { model, Schema } from "mongoose";

const mataUangSchema = new Schema({
    mata: { type: String, unique: true },
    nama: String,
    beli: String,
    jual: String,
    tengah: String,
    simbol: String,
    tanggal: String,
    status: String
});

//module.exports = model('Message', messageSchema);

export default model('currencies', mataUangSchema)