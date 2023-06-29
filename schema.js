const graghql = require("graphql");
//we will write some variable will get from graphql     
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graghql;    

const userType = new GraphQLObjectType({
    name:'user'
})