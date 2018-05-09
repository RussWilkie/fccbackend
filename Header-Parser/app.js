//Basic required imports for Node
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const os = require('os');

//Create instance of express
let app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    let address = req.ip;
    let language = req.acceptsLanguages();
    let system = os.type();

    res.json({'IP Address: ': address, 'Language': language, 'Operating System': system});
})

app.listen('3000'/*, '127.0.0.1'*/);