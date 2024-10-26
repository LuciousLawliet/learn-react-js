import hakAksesResolvers from "./hakAkses.js";
import mataUangResolvers from "./mataUang.js";
import messagesResolvers from "./messages.js";
import menuListResolvers from "./menuList.js";
import navListResolvers from "./navList.js";
import usersResolvers from "./users.js";

const resolvers = {
    Query: {
        ...messagesResolvers.Query,
        ...usersResolvers.Query,
        ...hakAksesResolvers.Query,
        ...mataUangResolvers.Query,
        ...menuListResolvers.Query,
        ...navListResolvers.Query
    },
    Mutation: {
        ...messagesResolvers.Mutation,
        ...usersResolvers.Mutation,
        ...hakAksesResolvers.Mutation,
        ...mataUangResolvers.Mutation,
    },
}

// module.exports = {
//     Query: {
//         ...messagesResolvers.Query
//     },
//     Mutation: {
//         ...messagesResolvers.Mutation
//     },
// };

export default resolvers