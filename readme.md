# Web Design Contest API

A modern REST API for the WebProfessionals.org Web Design & Development Contest, built with Hono and OpenAPI documentation.

## Features

- Built with Hono framework for high performance
- OpenAPI documentation with Swagger UI
- TypeScript support
- Rate limiting
- Zod schema validation

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The API will be available at http://localhost:3000

### API Documentation

The Swagger UI documentation is available at:
- http://localhost:3000/swagger

### Deployment

To deploy to Cloudflare Workers:

```bash
npm run deploy
```

## API Endpoints

### GET /events

Returns a list of upcoming events.

Rate limited to 50 requests per minute per IP address.

#### Response

```json
[
  {
    "name": "Location 1",
    "location": "10st & Lincoln Ave",
    "date": "Jun 5",
    "time": "11 AM - 1:30 PM"
  },
  {
    "name": "Location 2",
    "location": "Glen Park Fountain",
    "date": "Jun 6",
    "time": "5 PM - 10 PM"
  }
]
```

## License

MIT