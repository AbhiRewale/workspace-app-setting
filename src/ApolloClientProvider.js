import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { ApolloLink } from "apollo-link";
import {InMemoryCache} from "@apollo/client";



export default class ApolloClientProvider {
  static _instance = null;

  static getInstance() {
    if (ApolloClientProvider._instance === null) {
      ApolloClientProvider._instance = new ApolloClientProvider();
    }

    return this._instance;
  }

  constructor() {
    const httpLink = new createHttpLink({
      uri: "https://aw3.ss.dev/work/api", // URL endpoint will come here
    });
    const userHttpLink = new createHttpLink({
      uri: "https://aw3.ss.dev/auth/api/v2", // URL endpoint will come here
    });
    const authLink = setContext((_, { headers }) => {
      const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjliMWRlYjRkLTNiN2QtNGJhZC05YmRkLTJiMGQ3YjNkY2I2ZCJ9.eyJ1c2VySWQiOiIzNDc2ODE2MTc0MjM2NjIxMDAiLCJmaXJzdG5hbWUiOiJNb2tzaCIsImxhc3RuYW1lIjoiSmFpbiIsImVtYWlsIjoibW9rc2guamFpbkBzYW1lc3BhY2UuY29tIiwib3JnSWQiOiIxMDAwMDA1Njc2Iiwib3JnTmFtZSI6IlNhbWVzcGFjZSBJbmMiLCJvcmdXZWJzaXRlIjoiaHR0cHM6Ly93d3cuc2FtZXNwYWNlLmNvbSIsImFjY2VzcyI6IkFkbWluIiwic3BhY2VzIjpbeyJuYW1lIjoid29ya3NwYWNlIn1dLCJpYXQiOjE2MzY1MjgxNTgsImV4cCI6MTYzOTEyMDE1OH0.QUgzVxSkx5fjMR88YmcOryrePYLdsThHgJq6KTXbTrsDuwuUBECsI3-Vf8tJHMMOBZ4hCVlKYQT2ZIy7M52RN17ulB6RSvLDLet03JjT9lzHs883HLrQeCvqQJGZ_b2vdkHNfOZh1yC7-uZMXunp8cjI-zJQl8Hbjq8LpjRw9jX7J9IUezOY7CRcD0ougjpQLDeKkxdM9fqyytk4onGBG4G05VurcD2_RZjysDqj_FdKBf-sIZjx0NbepHCmflPozhllPRV_mOeR9EmceK7w6d7NtX2CmsiH8N4_eVb2UUlhIUpdx_H_HK9-aovLlyz5lHI89YZy66MJvIFbd0gQcQ"
      return {
        headers: {
          ...headers,
          authorization: token ? token : "",
        },
      };
    });

    this.client = new ApolloClient({
      link: ApolloLink.from([authLink, httpLink]),
      cache: new InMemoryCache()
    });
    this.userClient = new ApolloClient({
      link: ApolloLink.from([authLink, userHttpLink]),
      cache: new InMemoryCache()
    })
  }
  

  getClient = () => {
    return this.client;
  };
}