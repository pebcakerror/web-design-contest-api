import { Hono } from 'hono'
import { OpenAPIHono, z } from '@hono/zod-openapi'
import { swaggerUI } from '@hono/swagger-ui'
import { events } from './data/events'
import { cors } from 'hono/cors'

// Create a new Hono app with OpenAPI support
const app = new OpenAPIHono()

// Add CORS middleware
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
  maxAge: 600,
}))

// Define the Event schema
const EventSchema = z.object({
  name: z.string().openapi({
    description: 'The name of the event',
    example: 'Food Truck Lunch'
  }),
  location: z.string().openapi({
    description: 'The human friendly location of the event',
    example: '58th & Ellis (U of C)'
  }),
  date: z.string().openapi({
    description: 'The human friendly date of the event',
    example: 'Jun 20'
  }),
  time: z.string().openapi({
    description: 'The human friendly time of the event',
    example: '11 AM - 1:30 PM'
  })
}).openapi('Event')

// Define the API routes with OpenAPI documentation
app.openapi(
  {
    path: '/events',
    method: 'get',
    tags: ['Events'],
    summary: 'Get upcoming events',
    description: 'Returns a list of upcoming events.',
    responses: {
      200: {
        description: 'List of events',
        content: {
          'application/json': {
            schema: z.array(EventSchema)
          }
        }
      }
    }
  },
  (c) => {
    return c.json(events)
  }
)

// Default route redirects to Swagger UI
app.get('/', (c) => {
  return c.redirect('/swagger')
})

// Swagger UI route
app.get('/swagger', swaggerUI({ url: '/openapi' }))


// route to get generated OpenAPI json
app.doc('/openapi', {
  openapi: '3.0.0',
  info: {
    title: 'Web Design Contest API',
    version: '1.0.0',
    description: `API for WebProfessionals.org Web Design & Development Contest`
  },
  servers: [
    {
      url: 'https://contest.worent.com/',
      description: 'Production server'
    }
  ]
})

// Start the server
export default {
  port: 3000,
  fetch: app.fetch
} 