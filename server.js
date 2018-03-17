const express = require('express');
const next = require('next');

const dev = process.env.Node_ENV !== 'production';
const pathMatch =require('path-match');
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
  
    const server = express();

   // server.use('/api', require('./routes/api/api_routes'));

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });