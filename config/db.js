const { Sequelize } = require("sequelize");

//root = username, root= password
const sequelize = new Sequelize("all bd", "root", "root",{
    host:"localhost",
    dialect:"mysql",
    logging:true,
}); 

//when it gets authentication? .then() means connection being set. 
sequelize.authenticate()
.then(() => {
    console.log("connected");
})
.catch(e =>{
    console.log("error" +e)
});

module.exports = sequelize;
