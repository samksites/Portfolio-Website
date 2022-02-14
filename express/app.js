/**
 * Packages: Express, Cors, bcrypt
 * 
 */

const mongoConnect = require("./sql-connections")

 const express = require('express');
 const cors = require('cors');
 
 
 
 const app = express();
 app.use(cors());
 app.use(express.json());
 

 let i = 0;
 
 const port = 3001;



/**
 * Function to pass in new user infromation.
 * Password is hashed and sent to be stored in the datbase
 */

 app.post('/login', async (request,response) => {
    
    try{
        
        var excutionResult = -1;
        
        var info = {"user": request.body.user, "password": request.body.password};
        // if the function returns true the user name and password was accepted.
        excutionResult = await mongoConnect.connection(1, info,false);
        
        
    }catch(e){
        console.log(e);
    }finally{
        
        response.send({"indicator":excutionResult});
    }


});


/**
 * Function to pass in new user infromation.
 * Password is hashed and sent to be stored in the datbase
 */

 app.post('/lookForUser', async (request,response) => {
        
    try{
        var excutionResult = -1;
        
        var info = {"user": request.body.user.toLowerCase()};
        // if the function returns true the user name and password was accepted.
        excutionResult = await mongoConnect.connection(1, info,true);
        console.log(info);
        
    }catch(e){
        console.log(e);
    }finally{
        
        response.send({"indicator":excutionResult});
    }


});


 
 app.listen(port, () => {
     console.log(`We're live on port ${port}!`)
 });