const express = require('express');

const app = express()
const port = 3000;

let i = 0;

app.get('/tick', (request, response) => {
    i += 1;
    response.send({number: i})
})

app.listen(port, () => {
    console.log(`We're live on port ${port}!`)
})