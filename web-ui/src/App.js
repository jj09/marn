import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Hello from './components/Hello';
import Books from './components/Books';
import CreateBook from './components/CreateBook';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark">
          <div className="navbar-nav mr-auto flex-row">
            <Link to="/" className="nav-link mr-2">Home</Link>
            <Link to="/books" className="nav-link mr-2">Books</Link>
            <Link to="/create" className="nav-link mr-2">Create Book</Link>
          </div>
        </nav>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/books" element={<Books />} />
            <Route path="/create" element={<CreateBook />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
