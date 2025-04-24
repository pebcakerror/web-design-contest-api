import { Hono } from 'hono'
import { OpenAPIHono } from '@hono/zod-openapi'
import { swaggerUI } from '@hono/swagger-ui'
import { z } from 'zod'

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
    path: '/events',
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
    // Sample data - replace with your actual data source
    const events = [
      {
        name: "Location 1",
        location: "10st & Lincoln Ave",
        date: "Jun 5",
        time: "11 AM - 1:30 PM"
      },
      {
        name: "Location 2",
        location: "Glen Park Fountain",
        date: "Jun 6",
        time: "5 PM - 10 PM"
      }
    ]
    return c.json(events)
  }
)

// Add Swagger UI
app.get('/swagger', swaggerUI({ url: '/doc' }))

// Generate OpenAPI documentation
app.doc('/doc', {
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