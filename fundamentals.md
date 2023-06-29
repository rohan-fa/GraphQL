### GraphQL

graphQL is a query language for api. normally when we want to see json data. it shows whole. With the help of graphQl we can track specific property of that data.
```
"status" : "ok",
"statusCode": 200, 
"data": [....],
"studentMarks": 68,
"studentAge": 30
```
So we want to see the "studentAge"? we can prefer graphQL. we want id 12 student data. 

### first we will work on node. 
with node will use graphQL. 
Node.js(backend)
    GraghQL
        MySql (data [comes with table so will use])
        ORM Sequelize

        or
        MongoDB (database)
            Mongoose 

### End Point:  
graphQL has one endpoint. that endpoint returns the client that we have. lets say 

end ponit: xyz.com/ <br>
Home (you know what give me studentMarks or return student mark)<br>
React Page <br>
Home <br>
So that will return that student data when you hit that http. <br>
Now again go to the Blog page. and give me the comment <br>
Blog<br>
studentComment<br>
it will return that data. main thing is there will be only one end point. what ever we want that will return that data. <br>
so to use graphQL we will not have direct url so that we can just hit in the browser. if we have <br>
React<br>
use Apollo client.<br>
we will hit the req and ask for the name ,age or email id

```
 npm i nodemon express-graphql express graphql
 ```
 ### server.js

 ### schema.js

create schema. 
```
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graghql;    
```

we are taking this variable for it we need username, or userId. so Before that we will ask the user you're asking it is integer, string, list? all of those we can track through this variables. 
#### second 
we will ask what the userType? 
example: 
```
Describe your data
type Project {
  name: String
  tagline: String
  contributors: [User]
}
```
```
Ask for what you want
{
  project(name: "GraphQL") {
    tagline
  }
}
```
in here tagline: String. 
#### SO because of that we created some fields to get thing quickly
```

const userType = new GraphQLObjectType({
    name:'user',
    fields: ()=> ({
        id:{type: GraphQLInt},
        name:{type:GraphQLString},
        emial:{type: GraphQLString},
        phone:{type:GraphQLInt}
    })
})
```
so whats happening? <br>
we took all the variables, we made an object userType so who ever make a request that fields to be there are written like name, id, email, phone. if someone make or else req error will come. now we check in codeimprove named function, now here we will check the type those we just defined (GraphQLString) or (GraphQLString), etc. when those are resolved we can ask for the data to provide and return. 

```
npx nodemon server.js
```



