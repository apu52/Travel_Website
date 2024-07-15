## Backend Module - Travel Booking API

This is the backend module for a travel booking API. It utilizes MongoDB for data storage and Express.js for server-side development.

### Environment Variables

The following environment variables are required and should be defined in a `.env` file:

* `PORT`: The port on which the server will listen (default: 5000)
* `DATABASE_URL`: The MongoDB connection string
* `JWT_SECRET_KEY`: The secret key used for signing JSON Web Tokens (JWT)
* `TOKEN_EXP`: The expiration time for JWTs (e.g., "1h" for 1 hour)

**Example .env file:**

```
PORT=5000
DATABASE_URL="mongodb+srv://username:password@cluster0.3bdpkm7.mongodb.net/?appName=Cluster0"
JWT_SECRET_KEY="authorizationAndAuthentication"
TOKEN_EXP="1h"
```

**How to create a `.env` file:**

1. Create a file named `.env` in the root directory of your project.
2. Add the environment variables as key-value pairs on separate lines.
3. **Do not** commit the `.env` file to your version control system (e.g., Git).

### Dependencies

This project uses the following dependencies:

* express: Web framework for building server-side applications
* mongoose: Object Document Mapper (ODM) for MongoDB
* http-status-codes: Provides convenient HTTP status code handling
* bcryptjs: Password hashing library
* jsonwebtoken: Library for generating and verifying JWTs

**Installation:**

```bash
cd backend
npm install
```

### Starting the Server

Start the development server with the following command:

```bash
npm run dev
```

This will start the server on the port specified in the `PORT` environment variable (default: 5000).

### API Endpoints

Here's a breakdown of the API endpoints available in this module:

**1. Locations Routes (`/locations`):**

* **GET /locations** (Public): Retrieves all locations from the database.
* **GET /locations/:id** (Public): Retrieves a specific location by its ID.
* **POST /locations/create** (**Authorization Required - Admin Role**): Creates a new location. Requires the following request body:
    * `img` (String): URL of the location image.
    * `locationName` (String): Name of the location.
    * `locationMapLink` (String): Link to the location on a map service.
    * `price` (Number): Price per night for the location.
    * `rating` (Number): Average rating of the location (optional).
    * `description` (String): Description of the location (optional).
    * `climateInfo` (String): Information about the location's climate (optional).
    * `transportationType` (Array of Strings): Types of transportation available to reach the location (optional).
    * `thingsToDo` (Array of Strings): Things to do around the location (optional).
* **PUT /locations/:id** (**Authorization Required - Admin Role**): Updates an existing location by its ID. Requires the same request body format as `POST /locations/create`.
* **DELETE /locations/:id** (**Authorization Required - Admin Role**): Deletes a location by its ID.

**2. User Routes (`/auth`):**

* **POST /auth/signup** (Public): Creates a new user account. Requires the following request body:
    * `name` (String): User's full name.
    * `email` (String): User's email address.
    * `password` (String): User's password.
    * `role` (String - optional): User's role (default: "Customer"). Can be "Admin" for admin users.
* **POST /auth/login** (Public): Logs a user in and returns an access token. Requires the following request body:
    * `email` (String): User's email address.
    * `password` (String): User's password.
* **GET /auth/logout** (**Authorization Required**): Logs the currently authenticated user out.

**3. Trip Booking Routes (`/trip`):**

* **POST /trip/book** (**Authorization Required**): Books a location for the currently authenticated user. Requires the following request body:
    * `id` (String): ID of the location to be booked.
    * `checkin` (Date): Check-in date