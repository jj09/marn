import {Book} from './models/Book.js';

export const resolvers = {
    Query: {
        hello: (_, {name}) => `Hello ${name}`,
        books: async () => await Book.find({}),
    },
    Mutation: {
        create: async (_, {title, year}) => {
            const newBook = new Book({title, year});
            await newBook.save();
            return newBook;
        },
        delete: async (_, {id}) => {
            const result = await Book.deleteOne({_id: id});
            if (result.acknowledged && result.deletedCount == 1) {
                return id;
            }
            return null;
        }
    }
};