const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');
const User = require('../models/user');

exports.authenticate = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      throw createHttpError(401, 'Not authorized to access this route');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      throw createHttpError(404, 'User not found');
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};