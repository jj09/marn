import gql from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        hello(name: String): String
        books: [Book]
    }
    type Book {
        id: ID,
        title: String,
        year: Int,
    }
    type Mutation {
        create(title: String, year: Int): Book
        delete(id: ID): ID
    }
`;