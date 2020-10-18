import express,{Request,Response,NextFunction} from 'express';
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
       db:models,
       user:req.user
     }
  }
})

const app = express();
let database: Mongoose.Connection;

// extract user id from cookie and retrun user model through the context
app.use(async (req:any,res:Response,next:NextFunction)=>{
    let user:any;
    try{
        user = await models.User.findOne({_id:'5f8bf481e4f5221560083426'});
    }catch(err){
      console.log('error' , err);
    }
    // if the is not token in cookie the the user be null
    if(!user){
         req.user=null
       }
    else req.user = user
    next();
})
server.applyMiddleware({app});

// init mongodb and when it be ready run the graphql server
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