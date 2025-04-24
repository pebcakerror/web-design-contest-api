import { Hono } from 'hono'
import { OpenAPIHono } from '@hono/zod-openapi'
import { swaggerUI } from '@hono/swagger-ui'
import { z } from 'zod'
import { events } from './data/events'

// Create a new Hono app with OpenAPI support
const app = new OpenAPIHono()

// Define the Event schema
const EventSchema = z.object({
  name: z.string(),
  location: z.string(),
  date: z.string(),
  time: z.string()
})

// Define the API routes with OpenAPI documentation
app.openapi(
  {
    path: '/api/events',
    method: 'get',
    tags: ['Events'],
    summary: 'Get upcoming events',
    description: 'Returns a list of upcoming events. Rate limited to 50 requests per minute per IP address.',
    responses: {
      200: {
        description: 'List of events',
        content: {
          'application/json': {
            schema: z.array(EventSchema)
          }
        }
      },
      429: {
        description: 'Rate limit exceeded',
        content: {
          'application/json': {
            schema: z.object({
              message: z.string()
            })
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


// route to get generated raw OpenAPI json
app.doc('/openapi', {
  openapi: '3.0.0',
  info: {
    title: 'Web Design Contest API',
    version: '1.0.0',
    description: 'API for WebProfessionals.org Web Design & Development Contest'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server'
    }
  ]
})

// Start the server
export default {
  port: 3000,
  fetch: app.fetch
} 