require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((db) =>
    console.log(`MongoDB connected to database name: ${db.connections[0].name}`)
  )
  .catch((err) => console.log(`Error in database connections ${err}`));
