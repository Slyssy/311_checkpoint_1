const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;

//* middleware
app.use(express.json());
app.use(express.urlencoded());

//* Importing Routers
const users = require('./src/routes/usersRoutes');

app.use(users);
app.listen(port, () => {
  console.log('app is listening on:', port);
});
