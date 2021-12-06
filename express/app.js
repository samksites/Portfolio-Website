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
 
 const port = 3000;
 

 app.get('/account_value', (request, response) => {
       var user = request.body.autenticate[0];

       var pas = request.body.autenticate[1];
     
     response.send({number: i});
 });



 app.delete('/dleate', (request, response) => {
    i = 0;
    response.send({number: i});
});


/**
 * Function to pass in new user infromation.
 * Password is hashed and sent to be stored in the datbase
 */

 app.post('/login', async (request,response) => {
    try{

        var excutionResult = -1;

        const password = request.body.pass;
        
        var info = {"user": request.body.user, "password": request.body.password};
        // if the function returns true the user name and password was accepted.
        excutionResult = mongoConnect.databaseCompare(1, info);
            
        
    }catch(e){
        console.log(e);
    }

    response.send({result: excutionResult});

});


/**
 * Function to pass in new user infromation.
 * Password is hashed and sent to be stored in the datbase
 */

app.post('/new-user', async (request,response) => {

    var excutionResult = -1;

    try{
        
        var info = {"user": request.body.user , "pas": request.body.password}
        // if the function returns true the user name and password was accepted.
        excutionResult = mongoConnect.userData(0, info);
        
        
    }catch(e){
        console.log(e);
    }

    response.send({result: excutionResult});

});


 
 app.listen(port, () => {
     console.log(`We're live on port ${port}!`)
 });