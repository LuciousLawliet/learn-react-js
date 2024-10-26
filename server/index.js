import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import {typeDefs} from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers/index.js'

const MONGODB = "mongodb+srv://irhamfadel:DTMS-FADEL@dtms-fadel.olw7a.mongodb.net/?retryWrites=true&w=majority&appName=DTMS-Fadel";

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB)
    .then(() => {
        console.log("MongoDB Connected");
        return server.listen({port: 5000});
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    });