const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app)
const appRoutes = require('./app/routes');
//Init databases connection
require('./app/dbManager')

// Constants
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Welcome to API\n');
});

app.use(bodyParser.json());
app.use('/api', require('./app/routes'))

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection at Promise', err)
}).on('uncaughtException', err => {
  console.error('Uncaught Exception thrown', err)
  process.exit(1)
})

http.listen(port, function () {
  console.log('Running on port', port);

})
