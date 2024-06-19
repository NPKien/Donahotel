require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import các routes đã chỉnh sửa tên
const bookingRoutes = require('./routes/bookingRoutes');
const typeroomRoutes = require('./routes/typeroomRoutes');
const foodRoutes = require('./routes/foodRoutes');
const questionRoutes = require('./routes/questionRoutes');


app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/booking', bookingRoutes);
app.use('/type', typeroomRoutes);
app.use('/food', foodRoutes);
app.use('/question', questionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
