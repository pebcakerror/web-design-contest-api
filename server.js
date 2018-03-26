const express = require('express');
const events = require('./data/events');

const server = express();

server.use(express.static(`${__dirname}/public`))

server.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(events);
});

server.listen(60606, () => console.log('listening on port 60606'));
