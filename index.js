const { GraphQLServer } = require('graphql-yoga')


const hello = require('./Hello')
const book = require('./Book')

// TODO: merge schema and type defs


 
const server = new GraphQLServer({typeDefs,resolvers})
server.start(() => console.log('Server is running on localhost:4000'))