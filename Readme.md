# URL Shortener

This is a simple URL shortener web application built with Node.js, Express, and MongoDB. It allows users to enter a long URL and receive a short URL that redirects to the original URL. The short URL is generated using a unique alphanumeric code and stored in the MongoDB database.

## Installation

To install and run this application, you will need Node.js and MongoDB installed on your system. Follow these steps:

1. Clone the repository: `git clone https://github.com/akshitgautam42/url-shortener.git`
2. Navigate to the project directory: `cd url-shortener`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

The application will now be running on `http://localhost:3000`.

## Usage

To use the application, open your web browser and navigate to `http://localhost:3000`. Enter a long URL in the input field and click the "Shorten" button. The application will generate a short URL and display it on the screen.

You can then copy the short URL and use it to redirect to the original URL.

## API

The application also includes an API that can be used to generate short URLs programmatically. The API is mounted at `/api` and includes the following endpoints:

- `POST /api/shortUrls`: Creates a new short URL from a long URL
- `GET /api/shortUrls/:id`: Retrieves a short URL by its ID
- `DELETE /api/shortUrls/:id`: Deletes a short URL by its ID

## Credits

This application was created by [Your Name](https://github.com/akshitgautam42).
