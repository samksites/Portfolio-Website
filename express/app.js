/**
 * Packages: Express, Cors
 * 
 */

 const express = require('express');
 const cors = require('cors');

 
 
 const app = express();
 app.use(cors());
 app.use(express.json());
 

 let i = 0;
 
 const port = 3000;
 
 app.get('/tick', (request, response) => {
     i += 1
     
     response.send({number: i});
 });

 app.delete('/dleate', (request, response) => {
    i = 0;
    response.send({number: i});
});

app.post('/jump', (request,response) => {
    i = request.body.number;
    console.log(request.body.number);
    response.send({number: i});
});


 
 app.listen(port, () => {
     console.log(`We're live on port ${port}!`)
 });