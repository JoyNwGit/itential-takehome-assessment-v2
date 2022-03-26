
// add filesystem module to work with my computer's file system
const fs = require('fs');
// get all the types your queries will use
const typeDefs = fs.readFileSync('./../public/schema.graphql', {encoding: 'utf-8'});
// get all the functions that will handle query resolving
const resolvers = require('./../public/resolvers');

// create the schema object and how it will resolve
const {makeExecutableSchema} = require('graphql-tools');
const schema = makeExecutableSchema( {typeDefs, resolvers} );


const  {ApolloServer, graphqlExpress} = require('apollo-server-express');
const server = ApolloServer({schema})


const handler = server.createHandler({ path: "/api/myserver" });

// then disable bodyParser so that the request doesn’t get blocked
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
