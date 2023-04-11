import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import App from './App';
import './index.css';
import "./i18n"

const client = new ApolloClient({
  uri: 'http://localhost:4003/graphql',
  cache: new InMemoryCache()
})

const root = createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ApolloProvider>
);

//Remover el loading 
postMessage({ payload: 'removeLoading' }, '*')