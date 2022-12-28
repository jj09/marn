import { gql } from '@apollo/client';

export const BOOKS_QUERY = gql`
    query Query {
        books {
            id
            title
            year
        }
    }
`;

export const CREATE_BOOK_MUTATION = gql`
    mutation Mutation($title: String, $year: Int) {
        create(title: $title, year: $year) {
            id
            title
            year
        }
    }
`;

export const DELETE_BOOK_MUTATION = gql`
    mutation Mutation($id: ID) {
        delete(id: $id)
    }
`;