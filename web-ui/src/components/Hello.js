import {gql, useQuery} from '@apollo/client';

const HELLO_QUERY = gql`
    query Query {
        hello
    }
`;

export default function Hello() {
    const {data, loading, error} = useQuery(HELLO_QUERY);

    if (loading) return <div>Loading...</div>;

    if (error) {
        console.error('HELLO_QUERY error', error);
        return <div>Error (check console logs)</div>;
    }

    return <div>{data?.hello}</div>;
}