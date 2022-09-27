const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

//* middleware
app.use(express.json());
// app.use(express.urlencoded());

//* Importing Routers
const userRoutes = require('./src/routes/usersRoutes');

app.use(userRoutes);
app.listen(port, () => {
  console.log('app is listening on:', port);
});
