export default function Book({book}) {
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.year}</td>
        </tr>
    );
}