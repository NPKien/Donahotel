const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/donahotel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import các routes đã chỉnh sửa tên
const bookingRoutes = require('./routes/bookingRoutes');

app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/booking', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});