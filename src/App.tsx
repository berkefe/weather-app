import React from "react";
import { ApolloClient, InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import "./styles.css";
import AppComponent from "./components/app/app";

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://gql-weather.herokuapp.com/" }),
  cache: new InMemoryCache(),
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

export default App;
