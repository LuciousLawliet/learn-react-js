import HakAkses from "../../models/HakAkses.js";
import { ApolloError } from "apollo-server";

const hakAksesResolvers = {
  Mutation: {
    async addHakAksesByKode(_, { addHakAksesInput: { kode, nama, status } }) {
      // check if kode is new or old
      const oldCode = await HakAkses.findOne({ kode });

      // throw error if kode is old
      if (oldCode) {
        throw new ApolloError(
          "Hak Akses sudah teregistrasi " + kode,
          "ACCESS_ALREADY_EXISTS"
        );
      }

      // build mongoose model
      const newCode = new HakAkses({
        kode: kode,
        nama: nama,
        status: status,
      });

      // save kode in mongoDB
      const res = await newCode.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },

    async editHakAksesByKode(_, { editHakAksesInput: { kode, nama, status } }) {
      // see if a user exists
      const wasEdited = (
        await HakAkses.updateOne({ kode }, { nama: nama, status: status })
      ).modifiedCount;

      return wasEdited;
    },
  },
  Query: {
    // getHakAksesByKode() {
    //     return HakAkses
    // }
    getHakAksesByKode: (_, { ID }) => HakAkses.findById(ID),

    async getHakAkses() {
      return await HakAkses.find();
    },
  },
};

export default hakAksesResolvers;
