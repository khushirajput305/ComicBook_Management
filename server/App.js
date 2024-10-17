const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = require('./config/db');


//Connect to the database
connectDB();

//middlewares
const app = express();

//PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
