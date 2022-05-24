const express = require('express');

const app = express();
const PORT = 4001;

app.get ('/', function (request, response) {
    response.send('Helo World')
})

app.listen(PORT, function() {
    console.log(`Server running on PORT: ${PORT}`);
});

