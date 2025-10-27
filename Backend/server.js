// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Allowlist for CORS (production frontend + local dev)
const allowedOrigins = [
  'https://auth-features.vercel.app', // production frontend (no trailing slash)
  'http://localhost:3000'             // react dev server
];

app.use(express.json());

// CORS middleware with allowlist
app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (curl, mobile apps, postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS policy: This origin is not allowed.'), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true // set to true if you use cookies/sessions (otherwise false)
}));

// Connect to DB after middleware setup
connectDB();

// API routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Auth Features API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
