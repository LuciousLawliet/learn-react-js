import { model, Schema } from "mongoose";

const menuListSchema = new Schema({
    menu_id: { type: String, unique: true },
    nama: { type: String, default: null },
    path_menu: { type: String },
    hasChild: String,
    child: []
});

//module.exports = model('Message', messageSchema);

export default model('menus', menuListSchema)