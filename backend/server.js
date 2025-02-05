require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/auth.routes');
const { authenticate } = require('./src/middleware/auth.middleware');
const { errorHandler } = require('./src/middleware/error.middleware');

const app = express();

// Database connection
connectDB();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/auth', authRoutes);

// Protected route example
app.get('/profile', authenticate, (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
});

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});