const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middleWare/error');
const connectDB = require('./config/dbconnection');

dotenv.config();

connectDB();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use('/api/contacts', require('./routes/routes'));
app.use(errorHandler);
app.listen(PORT, ()=>console.log("Server started"));