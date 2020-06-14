const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schemas/schema');

const app = express();
// const cors = require('cors');
require('./configs/db.config');

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

// app.use(cors());

app.use('/', require('./routes/todos-routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
