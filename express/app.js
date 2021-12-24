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

 app.get('/', (req, res) => {
    res.send('Hello World!')
  })
 

 app.get('/account_value', (request, response) => {
       var user = request.body.autenticate[0];

       var pas = request.body.autenticate[1];
     
     response.send({number: i});
 });



 app.get('/dleate', (request, response) => {
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
        excutionResult = databaseCompare.databaseCompare(1, info);
            
        
    }catch(e){
        console.log(e);
    }finally{
        console.log("yo");
        response.send("hello");
    }

    

});


/**
 * Function to pass in new user infromation.
 * Password is hashed and sent to be stored in the datbase
 */

app.post('/new-user', async (request,response) => {

    
    var excutionResult = -1;

    try{
        
        var info = {"user": "samks" , "password": "1234"}
        // if the function returns true the user name and password was accepted.
        excutionResult = await mongoConnect.connection(0, info);
        // returns if the connection worked or not
        response.send({"indicator":excutionResult});
        
        
        
    }catch(e){
        console.log(e);
    }

});


 
 app.listen(port, () => {
     console.log(`We're live on port ${port}!`)
 });