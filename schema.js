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
    name:'user',
    fields: ()=> ({
        id:{type: GraphQLInt},
        name:{type:GraphQLString},
        email:{type: GraphQLString},
        phone:{type:GraphQLString}
    })
})

//now will create a function so that anything will be called data will provide accordingly, means Root query

const RootQuery = new GraphQLObjectType({
    name:'xzy',
    //we are going to run our first test (codeimprove).when it pass in the query? we will check whats the type: list,inside of list function will feed the userType function.   
    fields: ()=> ({
        codeimprove:{
            type: new GraphQLList(userType),
            resolve(parents, args){
                let data = [{
                    id:12,name:"codeimprove",email:"rohan@gmai.com",phone:24335345245
                },
                {
                    id:13,name:"demo",email:"ran@gmai.com",phone:3411433534566
                }]
                return data;           
            }
            
        }
        
    })
    
}) 

module.exports = new GraphQLSchema({query : RootQuery})
