import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import ApolloClientProvider from './ApolloClientProvider';
import App from "./App";

const client = new ApolloClient({
  uri: "https://aw3.ss.dev/work/api",
  cache: new InMemoryCache()
});


function Samespace() {
  return (
    <ApolloProvider client={ApolloClientProvider.getInstance().getClient()}>
      <App />
    </ApolloProvider>
  )
}

ReactDOM.render(<Samespace />, document.getElementById("root"));
