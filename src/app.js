const express = require('express');
const http = require('http');
const config = require('./config.json');
const appRoutes = require('./routes/Routes');

// Set up the express app .
const app = express();
const port = config.port;   

 app.use('/', appRoutes);

app.get('*', (req, res) => {
  res.status(404).send({ status: 404, error: true, message: 'The requested resource does not exist' });
});

const server = http.createServer(app);  

server.listen(port, () => {
  console.log('server running on http' + `://localhost:${port}`);
});
