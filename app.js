const express = require('express');
const path = require('path');

const app = express();


const cors = require('cors');
const { utc } = require('time-stamp');
app.use(cors({optionsSuccessStatus: 200}));


app.use(express.static('./public'));

app.get('/', function(req,res){
  res.sendFile(path.resolve(__dirname, '/.public/index.html'))
})


app.get('/api/UnixTime', function(req, res, next) {
  req.time = new Date().getTime().toString();  
  next();
}, function(req, res) {
  res.json({"unix": req.time});
});

/*
app.get('/api/UnixClock', function(req, res, next) {
  req.time = new Date().toString(); 
  next();
}, function(req, res) {
  res.json({"unix": req.time});
});
*/

app.get('/api/UnixClock', function(req, res, next) {
  utc.Date = new Date().toString(); 
  next();
}, function(req, res) {
  res.json({"utc": utc.Date});
});



app.all('*', function(req, res){
    res.status(404).send('resorce not found')
})

app.listen(5000, function(){
    console.log('server is listening on port 5000...')
})