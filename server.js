const express = require('express');
const db = require('./db');
const api = require('./api');

const app = express();
const port = 3000;

// Mount the API route at /api
app.use('/api', api);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});