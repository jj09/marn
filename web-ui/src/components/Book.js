import { useMutation } from '@apollo/client';
import {DELETE_BOOK_MUTATION, BOOKS_QUERY} from '../graphql';

export default function Book({book}) {
    const [deleteBookMutation] = useMutation(DELETE_BOOK_MUTATION, {
        refetchQueries: [
            {query: BOOKS_QUERY},
        ]
    });

    const deleteBook = () => {
        deleteBookMutation({
            variables: {
                id: book.id,
            },
        });
    };
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.year}</td>
            <td>
                <button className="btn btn-danger" onClick={deleteBook}>
                    Delete
                </button>
            </td>
        </tr>
    );
}