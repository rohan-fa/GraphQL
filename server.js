const express = require("express");
const app = exprss(); 
const PORT = 3000;
const {graphqlHTTP} = reqiure("express-graphql");

const schema = require("./schema");


app.use(express.json())

app.use("/graphql", 
    graphqlHTTP({
        schema,
        graphql:true
    }) //put the schema, in here object get pass. in where ask where is your schema. 
);         //in this path graghql will run 

app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`)
})