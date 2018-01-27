//Basic required imports for Node
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Create instance of express
let app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//GET call to return JSON that formats natural and unix date
app.get('/:date', function(request, response, next){
    let date = request.params.date;
    let naturalDate, unixDate;
    
    const format = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    if(isNaN(date)){
        naturalDate = new Date(date);
        naturalDate = naturalDate.toLocaleDateString('en-us', format);
        unixDate = new Date(date).getTime()/1000;
    }
    else{
        unixDate = date;
        naturalDate = new Date(date * 1000);
        naturalDate = naturalDate.toLocaleDateString('en-us', format);
    }
    response.json({unix: unixDate, natural: naturalDate});
});


app.listen(3000, function(){
    console.log('Server is running...');
});