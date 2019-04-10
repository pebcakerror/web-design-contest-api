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
 * @apiSuccess {Object[]}   response               List of Locations
 * @apiSuccess {String}     response.name               Location Name
 * @apiSuccess {Object}     response.address            Address data (example for an Object)
 * @apiSuccess {String}     response.address.street     Street
 * @apiSuccess {String}     response.address.city       City
 * @apiSuccess {String}     response.address.state      State - Full Name
 * @apiSuccess {String}     response.address.state_abbr State - 2-letter Abbreviation
 * @apiSuccess {String}     response.address.zip        5-digit Zipcode
 * @apiSuccess {String}     response.date               Date (as a preformated string)
 * @apiSuccess {String}     response.time               Time (as a preformated string)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         name: "Location 1",
 *         address: {
 *         street:  "3861 Forest Ln",
 *         city: "Hartford",
 *         state: "Louisiana",
 *         state_abbr: "LA",
 *         zip: "17951"
 *       },
 *       date: "Aug. 3, 2018",
 *       time: "7:00 PM"
 *     },
 *     {
 *       name: "Location 2",
 *       address: {
 *         street:  "2655 E Sandy Lake Rd",
 *         city: "Victorville",
 *         state: "Michigan,
 *         state_abbr: "MI",
 *         zip: "22245"
 *       },
 *       date: "Aug. 3, 2018",
 *       time: "7:00 PM"
 *     }
 *   ]
 */
function getEvents(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(events);
}

server.get('/events', getEvents);

server.listen(60606, () => console.log('listening on port 60606'));
