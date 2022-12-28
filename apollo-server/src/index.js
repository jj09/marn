import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {typeDefs} from './models/typeDefs.js';
import {resolvers} from './resolvers.js';
import mongoose from 'mongoose';

const db = await mongoose.connect('mongodb://localhost:27017/marn');

console.info('📚 Connected to db', db?.connections[0]?._connectionString);

const server = new ApolloServer({typeDefs, resolvers});

const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000,
    },
});

console.info(`🚀 Server ready at ${url}`);