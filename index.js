// require your server and launch it
const server = require('./api/server.js');

const port = 6070;

server.listen(port, () => {
    console.log(`\n Server running on http://localhost:${port}\n`);
});