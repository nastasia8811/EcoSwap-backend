const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const evntsList = require('./routes/event');
const customers = require('./routes/customers');
const products = require('./routes/products');
const globalConfigs = require('./routes/globalConfigs');

const app = express();

/**
 * CORS
 */
const allowedOrigins = 'http://localhost:3000';
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/event', evntsList);
app.use('/api/customers', customers);
app.use('/api/configs', globalConfigs);
app.use('/api/products', products);



// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));







