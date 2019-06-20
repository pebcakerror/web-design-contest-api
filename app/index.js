const express = require('express');
const events = require('./data/events');

const server = express();

server.use(express.static(`${__dirname}/public`));

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * @api {get} /events Get upcomming Events
 * @apiName getEvents
 * @apiGroup Events
 *
 * @apiExample fetch() Example:
 * fetch('http://localhost:60606/events')
 *     .then(function(response) {
 *         return response.json();
 *     })
 *     .then(function(data) {
 *         console.log(data);
 *     })
 *     .catch(function(error) {
 *         console.error(error);
 *     });
 *
 * @apiExample jQuery.get() Example:
 * jQuery.get('http://localhost:60606/events')
 *     .done(function(data) {
 *         console.log(data);
 *     })
 *     .fail(function(error) {
 *         console.log(error);
 *     });
 *
 * @apiSuccess {Object[]}   response                    List of Locations
 * @apiSuccess {String}     response.name               Location Name
 * @apiSuccess {String}     response.location           Description of location 
 * @apiSuccess {String}     response.date               Date (as a preformated string)
 * @apiSuccess {String}     response.time               Time (as a preformated string)
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    [
 *      {
 *        name: "Location 1",
 *        location: "10st & Lincoln Ave",
 *        date: "Jun 5",
 *        time: "11 AM - 1:30 PM"
 *      },
 *      {
 *        name: "Location 2",
 *        location: "Glen Park Fountain",
 *        date: "Jun 6",
 *        time: "5 PM - 10 PM"
 *      }
 *    ]
 */
function getEvents(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(events);
}

server.get('/events', getEvents);

server.listen(60606, () => console.log('listening on port 60606'));
