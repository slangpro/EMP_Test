# EMP_Test
A basic Event Management Platform (EMP) built with Node.js and TypeScript, providing CRUD operations for events and optional filtering capabilities.


Project Structure
src/                  # Source files
  |- controllers/     # API route controllers
  |- models/          # Data models (e.g., Event)
  |- routes/          # API routes
  |- middleware/      # Middleware functions (e.g., Errorhandler)
  |- app.ts           # Express application setup
  |- server.ts        # Server configuration
postman/
  |- EMP.postman_collection.json  # Postman collection file
README.md             # Project overview, installation instructions, and usage guide
package.json          # Project dependencies and scripts
tsconfig.json         # TypeScript configuration


Installation
Clone the repository:

bash
Copy code
git clone <https://github.com/slangpro/EMP_Test.git>
cd <EMPT_TEST>
Install dependencies:

bash
Copy code
npm install
Run the server:

bash
Copy code
npm start
API Endpoints:

POST /api/events: Create a new event.
GET /api/events: Retrieve all events with optional filters.
GET /api/events/
: Retrieve a specific event by ID.
PUT /api/events/
: Update an existing event.
DELETE /api/events/
: Delete an event by ID.
Postman Collection:

Import EMP.postman_collection.json to test API endpoints.