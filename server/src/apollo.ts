import {ApolloServer} from 'apollo-server-express';

export default class ProtectedApolloServer extends ApolloServer {
  async createGraphQLServerOptions(req:any, res:any) {
    const options = await super.createGraphQLServerOptions(req, res)

    return {
      ...options,
      // validationRules: [
      //   ...options.validationRules,
      //   costAnalysis({
      //     maximumCost: 1000,
      //     defaultCost: 1,
      //     variables: req.body.variables,
      //     createError: (max, actual) => {
      //       const err = new Error(
      //         `GraphQL query exceeds maximum complexity, please remove some nesting or fields and try again. (max: ${max}, actual: ${actual})`
      //       )
      //       return err
      //     },
      //   }),
      // ],
    }
  }
}