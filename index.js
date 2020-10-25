const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

var port = 3000;
if (process.env.PORT) {
    port = process.env.PORT;
}


app.listen(port, () => console.log('Example app listening on port ' + port));
