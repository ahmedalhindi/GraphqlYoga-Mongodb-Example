const typeDefs = `
type Book {
    book: String!
}
`
const resolvers = {
  Query: {
    book: () => `book resolver`,
  },
}

module.exports = {
  typeDefs,
  resolvers,
}
