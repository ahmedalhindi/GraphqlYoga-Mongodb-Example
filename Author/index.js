const typeDefs = `
  type Query {
    author: String!
  }
`
const resolvers = {
  author: () => "author resolver",
}

module.exports = {
  typeDefs,
  resolvers,
}
