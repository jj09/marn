import {Book} from './models/Book.js';

export const resolvers = {
    Query: {
        hello: (_, {name}) => `Hello ${name}`,
        books: async () => await Book.find({}),
    },
};