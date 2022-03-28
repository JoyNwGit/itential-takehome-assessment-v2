import {typeDef as SodaDef} from '../../public/schemas/SodaSchemas';
// get all the types your queries will use

// get all the functions that will handle query resolving
const resolvers = require('../../public/resolvers');
// create the schema object and how it will resolve
const {makeExecutableSchema} = require('@graphql-tools/schema');
const schema = makeExecutableSchema( {typeDefs: [SodaDef], resolvers} );

// Create the server
const  {ApolloServer} = require('apollo-server-micro');
const server = new ApolloServer({schema});

const startServer = server.start()

// then disable bodyParser so that the request doesn’t get blocked
export const config = {
  api: {
    bodyParser: false,
  },
};

// i have no idea what this is meant to do, i think it's a NextJS thing
// i'll look into it later
export default async function handler(req, res) {
  await startServer;
  await server.createHandler({
    path: "/api/myserver"
  })(req, res);
};
