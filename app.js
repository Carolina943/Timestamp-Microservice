const express = require('express');
const path = require('path');

const app = express();


const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));


app.use(express.static('./public'));
app.get('/', function(req,res){
  res.sendFile(path.resolve(__dirname, '/.public/index.html'))
})

app.all('*', function(req, res){
    res.status(404).send('resorce not found')
})

app.listen(5000, function(){
    console.log('server is listening on port 5000...')
})