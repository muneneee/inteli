const express = require('express');

const app = express();


app.use(express.static('./dist/summary'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/summary/'}),
);

app.listen(process.env.PORT || 8080);