import NavList from "../../models/NavList.js";
import { ApolloError } from "apollo-server";

const navListResolvers = {
  Query: {
    async getNavList() {
      return await NavList.find();
    },
  },
};

export default navListResolvers;
