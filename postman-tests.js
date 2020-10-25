const server = require('./index.js');
const newman = require('newman')

newman.run({
    collection: require('./KHE-API-tests.postman_collection.json'),
    reporters: 'cli',
}, function(err, summary) {
    server.close();
    if (err || summary.run.failures.length) {
        process.exit(1);
    }
});

