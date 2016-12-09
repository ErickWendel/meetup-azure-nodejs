'use strict';
const Express = require('express');
class Init {
    initServer() {
        const server = Express();
        server.get('/', (req, res) => {
            res.send('Hello TS !!');
        });
        server.listen(3000, () => {
            console.log('running!!');
        });
    }
}
