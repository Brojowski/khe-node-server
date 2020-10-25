const server = require('./index.js');
const newman = require('newman')

newman.run({
    collection: require('./KHE-API-tests.postman_collection.json'),
    reporters: 'cli',
}, function () {
    server.close();
})

