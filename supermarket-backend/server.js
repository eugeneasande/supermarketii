
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./models');
const apiRoutes = require('./routes/api');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 4000, () =>
    console.log(`Server running on port ${process.env.PORT || 4000}`)
  );
});
