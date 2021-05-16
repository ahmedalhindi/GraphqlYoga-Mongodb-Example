const typeDefs = `
type Query {
    hello(name: String): String!
}
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
  },
}

module.exports = {
  typeDefs,
  resolvers,
}
