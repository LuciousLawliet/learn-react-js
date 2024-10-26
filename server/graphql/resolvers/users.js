import User from "../../models/User.js";
import { ApolloError } from "apollo-server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const usersResolvers = {
  Mutation: {
    async registerUser(
      _,
      {
        registerInput: {
          nama,
          nik,
          password,
          role_id,
          role_access,
          branch_name,
          departemen,
        },
      }
    ) {
      const current = new Date();
      const tanggal = `${("0" + current.getDate()).slice(-2)}/${(
        "0" +
        (current.getMonth() + 1)
      ).slice(-2)}/${current.getFullYear()}`;
      // check if user is new or old
      const oldUser = await User.findOne({ nik });

      // throw error if user is old
      if (oldUser) {
        throw new ApolloError(
          "Pengguna sudah teregistrasi " + nik,
          "USER_ALREADY_EXISTS"
        );
      }

      // ENCRYPT PASSWORD
      let encryptedPassword = await bcrypt.hash(password, 10);

      // build mongoose model
      const newUser = new User({
        nama: nama,
        nik: nik,
        password: encryptedPassword,
        role_id: role_id,
        role_access: role_access,
        branch_name: branch_name,
        departemen: departemen,
        val_date: tanggal,
      });

      //create JWT
      const token = jwt.sign({ user_id: newUser._id, nik }, "UNSAFE_STRING", {
        expiresIn: "10000ms",
      });

      newUser.token = token;

      // save user in mongoDB
      const res = await newUser.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },

    async loginUser(_, { loginInput: { nik, password } }) {
      if (nik === "666") {
        // see if a user exists
        const user = await User.findOne({ nik });

        // check if the entered password equals the encrypted password
        if (user && (await bcrypt.compare(password, user.password))) {
          // create a new token
          const token = jwt.sign({ user_id: user._id, nik }, "UNSAFE_STRING", {
            expiresIn: "2hr",
          });
          // attatch token to user model that we found
          user.token = token;

          return {
            id: user.id,
            ...user._doc,
          };
        } else if (!user) {
          // if user doesn't exist, return error
          throw new ApolloError("NIK Belum Terdaftar!", "INCORRECT_NIK");
        } else {
          throw new ApolloError("Kata Sandi Salah!", "INCORRECT_PASSWORD");
        }
      } else {
        // see if a user exists
        const user = await User.findOne({ nik });

        // check if the entered password equals the encrypted password
        if (user && (await bcrypt.compare(password, user.password))) {
          // create a new token
          const token = jwt.sign({ user_id: user._id, nik }, "UNSAFE_STRING", {
            expiresIn: "10000ms",
          });
          // attatch token to user model that was found
          user.token = token;

          return {
            id: user.id,
            ...user._doc,
          };
        } else if (!user) {
          // if user doesn't exist, return error
          throw new ApolloError("NIK Belum Terdaftar!", "INCORRECT_NIK");
        } else {
          throw new ApolloError("Kata Sandi Salah!", "INCORRECT_PASSWORD");
        }
      }
    },

    async logoutUser() {
      return true;
    },

    async getSessionUser(_, { sessionInput: { nik } }) {
      const sessionUser = await User.findOne({ nik });

      if (sessionUser) {
        return {
          id: sessionUser.id,
          ...sessionUser._doc,
        };
      } else {
        throw new ApolloError("INCORRECT_NIK");
      }
    },
  },
  Query: {
    user: (_, { ID }) => User.findById(ID),

    async getUser() {
      return await User.find();
    },
  },
};

export default usersResolvers;
