const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./models');
const apiRoutes = require('./routes/api');

const app = express();

// ✅ Allow all origins (for local testing or frontend hosted elsewhere)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Sync database and start server
db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 4000, () =>
    console.log(`🚀 Server running on port ${process.env.PORT || 4000}`)
  );
});
