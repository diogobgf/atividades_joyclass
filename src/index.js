const express = require('express');

const app = express();

app.listen(3333);

app.get('projects', (request, response) => {
    console.log('Server ok')
    return response.send("Hello World !!!");
});

