const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/index');

exports.register = async (req, res) => {
  const { user, password } = req.body;


  const existingUser = await User.findOne({ user });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }


  const hashedPassword = await bcrypt.hash(password, 10);


  const newUser = new User({
    user,
    password: hashedPassword
  });

  await newUser.save();

  res.status(201).json({ message: 'User created successfully' });
};


exports.login = async (req, res) => {
  const { user, password } = req.body;

  const existingUser = await User.findOne({ user });
  if (!existingUser) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }


  const token = jwt.sign({ id: existingUser._id, user: existingUser.user }, 'your_jwt_secret', { expiresIn: '1h' });

  res.status(200).json({ token, idadmin: existingUser._id });
};


exports.authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
