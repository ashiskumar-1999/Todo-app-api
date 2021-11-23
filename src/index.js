var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

var app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(`
    type RootQuery{

    }
    
    type RootMutation{

    }
    schema{
      query:Rootquery
      mutation: Rootmutation
    }`),
    rootValue: {},
    graphiql: true,
  })
)
app.listen(4000, () => console.log("localhost:4000/graphql"))
