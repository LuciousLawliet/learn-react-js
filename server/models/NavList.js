import { model, Schema } from "mongoose";

const navListSchema = new Schema({
    menu_id: { type: String, unique: true },
    nama: { type: String, default: null },
});

//module.exports = model('Message', messageSchema);

export default model('navigations', navListSchema)