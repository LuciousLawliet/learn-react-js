import MataUang from "../../models/MataUang.js";
import { ApolloError } from "apollo-server";

const mataUangResolvers = {
  Mutation: {
    async addMataUang(
      _,
      {
        addMataUangInput: {
          mata,
          nama,
          beli,
          jual,
          tengah,
          simbol,
          tanggal,
          status,
        },
      }
    ) {
      // check if kode is new or old
      const oldMoney = await MataUang.findOne({ mata });

      // throw error if kode is old
      if (oldMoney) {
        throw new ApolloError(
          "Mata Uang sudah teregistrasi " + mata,
          "ACCESS_ALREADY_EXISTS"
        );
      }

      // build mongoose model
      const newMoney = new MataUang({
        mata: mata,
        nama: nama,
        beli: beli,
        jual: jual,
        tengah: tengah,
        simbol: simbol,
        tanggal: tanggal,
        status: status,
      });

      // save kode in mongoDB
      const res = await newMoney.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },

    async editMataUang(
      _,
      {
        editMataUangInput: {
          mata,
          nama,
          beli,
          jual,
          tengah,
          simbol,
          tanggal,
          status,
        },
      }
    ) {
      
      const wasEdited = (
        await MataUang.updateOne(
          { mata },
          {
            nama: nama,
            beli: beli,
            jual: jual,
            tengah: tengah,
            simbol: simbol,
            tanggal: tanggal,
            status: status,
          }
        )
      ).modifiedCount;

      return wasEdited;
    },
  },
  Query: {
    mataUang: (_, { ID }) => MataUang.findById(ID),

    async getMataUang() {
      return await MataUang.find();
    },
  },
};

export default mataUangResolvers;
