const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Chris has taken over your repository. All web sites now belong to Seitz.'));

var port = 3000;
if (process.env.PORT) {
    port = process.env.PORT;
}


var server = app.listen(port, () => console.log('Example app listening on port ' + port));

module.exports = server;
