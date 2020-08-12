const express = require('express');

const app = express();


app.use(express.static('./dist/summary'));

app.get('/*', (req, res) =>{
    res.sendFile(`./front-end/dist/index.html`);
});


app.listen(process.env.PORT || 8080);