const express = require('express');
const events = require('./data/events');
const rateLimit = require('express-rate-limit');

const server = express();

// Create a limiter that allows 50 requests per minute
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 50, // Limit each IP to 50 requests per minute
  message: 'Too many requests from this IP, please try again after a minute'
});

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
 * @apiDescription Returns a list of upcoming events. Rate limited to 50 requests per minute per IP address.
 * If the rate limit is exceeded, the API will return a 429 status code with an error message.
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
 * @apiError (Error 429) {String} message               Rate limit exceeded message
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 429 Too Many Requests
 *     {
 *       "message": "Too many requests from this IP, please try again after a minute"
 *     }
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

// Apply rate limiting to the /events route
server.get('/events', limiter, getEvents);

server.listen(60606, () => console.log('listening on port 60606'));
