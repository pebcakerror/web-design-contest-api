const restify = require('restify');
const events = require('./data/events')

const server = restify.createServer();


server.get('events', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(events);
  next();
});

server.listen(60606, function() {
  console.log('%s listening at %s', server.name, server.url);
});
