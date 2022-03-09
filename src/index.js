var express = require("express")
const bodyParser = require("body-parser")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

var app = express()

app.use(bodyParser.json())
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
    rootValue: root,
    graphiql: true,
  })
)
app.listen(4000, () => console.log("localhost:4000/graphql"))
