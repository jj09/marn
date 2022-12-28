import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import gql from 'graphql-tag';

const typeDefs = gql`
    type Query {
        hello(name: String): String
    }
`;
const resolvers = {
    Query: {
        hello: (_, {name}) => `Hello ${name}`,
    },
};

const server = new ApolloServer({typeDefs, resolvers});

const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000,
    },
});

console.info(`🚀 Server ready at ${url}`);