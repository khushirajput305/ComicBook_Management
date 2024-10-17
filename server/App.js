const express = require("express");
require('dotenv').config();
const connectDB = require('./config/db');
const comicBookRoutes = require('./Routes/comicBookRoutes');


//Connect to the database
connectDB();

//middlewares
const app = express();
app.use(express.json());

//routes
app.use('/api',comicBookRoutes)

//PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
