import gql from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        hello(name: String): String
    }
`;