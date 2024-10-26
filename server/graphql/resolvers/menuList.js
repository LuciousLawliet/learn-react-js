import MenuList from "../../models/MenuList.js";
import { ApolloError } from "apollo-server";

const menuListResolvers = {
  Query: {
    async getMenuList() {
      return await MenuList.find();
    },
  },
};

export default menuListResolvers;
