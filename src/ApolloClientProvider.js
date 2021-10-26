import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { ApolloLink } from "apollo-link";



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
    const authLink = setContext((_, { headers }) => {
      const token = "JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjliMWRlYjRkLTNiN2QtNGJhZC05YmRkLTJiMGQ3YjNkY2I2ZCJ9.eyJ1c2VySWQiOiIzNDc2ODE2MTc0MjM2NjI0MDAiLCJmaXJzdG5hbWUiOiJNb2tzaCIsImxhc3RuYW1lIjoiSmFpbiIsImVtYWlsIjoibW9rc2guamFpbkBub3ZhbmV0Lm5ldCIsIm9yZ0lkIjoiMTAwMDAwNTY3NiIsIm9yZ05hbWUiOiJTYW1lc3BhY2UgSW5jIiwib3JnV2Vic2l0ZSI6Imh0dHBzOi8vd3d3LnNhbWVzcGFjZS5jb20iLCJhY2Nlc3MiOiJBZG1pbiIsInNwYWNlcyI6W3sibmFtZSI6IndvcmtzcGFjZSJ9XSwiaWF0IjoxNjM0Mzg5Nzk4LCJleHAiOjE2MzY5ODE3OTh9.PaGYgD_5NV4yGKzchl9L3u1MQ84Whel5zDNJc_X4Ipq9C4Y8sdwRE1aNLH9SCM3Y-ftitgamZLzRo-wO-bU8jddtgfSAxztL3KV15B6j9_5rvObYmjlscYrRbP6hW2rIUsaLE6n2-kemFWE3fN77yx9-WsNBSJ6DDwyVd3PwerFTMLZxvivW09qFTSK_DSWY0vTjGcNAupQEiFBFYZMfC8PdF4d1t33oZgjnjsYHNKhKqEefWVEChyxLbMgU0YVuR0-m1NY-cDnzC4JvfeQotZx9O61XSRnWIRhgiuaWf_myhQMlD4QIvR_F7OfIn5LEfRbu_Das6zLqfJcXMvoNjw"
      return {
        headers: {
          ...headers,
          authorization: token ? token : "",
        },
      };
    });

    this.client = new ApolloClient({
      link: ApolloLink.from([authLink, httpLink]),
    });
  }

  getClient = () => {
    return this.client;
  };
}