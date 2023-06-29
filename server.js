const express = require("express");
const app = express(); 
const PORT = 4000;
const {graphqlHTTP} = require("express-graphql");


const schema = require("./schema");

app.use(express.json())


app.use("/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    }) //put the schema, in here object get pass. in where ask where is your schema. 
);         //in this path graghql will run 

app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
})