const express = require('express');
const events = require('./data/events');

const server = express();

server.use(express.static(`${__dirname}/public`));

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


server.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(events);
});

server.listen(60606, () => console.log('listening on port 60606'));
