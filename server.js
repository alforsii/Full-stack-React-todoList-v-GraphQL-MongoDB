const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schemas/schema');
const cors = require('cors');

require('./configs/db.config');
const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_POINT,
    credentials: true,
  })
);

app.use(
  '/graphql',
  express.json(),
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.use('/', require('./routes/todos-routes'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
