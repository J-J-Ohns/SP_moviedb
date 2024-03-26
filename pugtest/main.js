const http = require('http');
const pug = require('pug');

const fn = pug.compileFile('templates/compile.pug');

http
    .createServer((req, res) => {
        let output = fn({ name: 'Nathaniel'});
        output = fn({ name: 'Howie'});

        res.end(output);
    })
    .listen((9999), () => console.log('Server is running on http://localhost:9999/'));