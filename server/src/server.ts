import express from 'express';
import {ApolloServer,ApolloServerExpressConfig} from 'apollo-server-express';
import {gql} from 'apollo-server-express';
import Mongoose from 'mongoose';
import models from './models';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
require('dotenv').config()
const server = new ApolloServer({
	typeDefs,
	resolvers,
  context:({req}:any)=>{
     return {
       req,
       db:models
     }
  }
})

const app = express();
let database: Mongoose.Connection;

server.applyMiddleware({app});

 const connect = () => {
  if (database) {
    return;
  }
  Mongoose.connect(`${process.env.MONG_DB}`)
  database = Mongoose.connection;
  database.once("open", async () => {
     app.listen({port:4000},()=>{
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
 })
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
connect();