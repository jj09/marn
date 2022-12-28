import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Hello from './components/Hello';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Hello />
    </ApolloProvider>
  );
}

export default App;
