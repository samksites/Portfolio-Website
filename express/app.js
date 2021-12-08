/**
 * Packages: Express, Cors, bcrypt
 * 
 */

const temp = require("./sql-connections")

 const express = require('express');
 const cors = require('cors');
 const bcrypt = require('bcrypt');
 
 
 const app = express();
 app.use(cors());
 app.use(express.json());
 

 let i = 0;
 
 const port = 2000;
 

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

app.post('/new-user', async (request,response) => {
    try{

        console.log(request.body.user);
        // generates salt to add to hashed password
        const salty = await bcrypt.genSalt();
        // hashes the password
        const hashedPassword = await bcrypt.hash(request.body.password,salty);
        
        var info = {"user": request.body.user , "pas": hashedPassword}
        // if the function returns true the user name and password was accepted.
        temp.insert(0, info);
            
        
    }catch(e){
        console.log(e);
    }

});


 
 app.listen(port, () => {
     console.log(`We're live on port ${port}!`)
 });