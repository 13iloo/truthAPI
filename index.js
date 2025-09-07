
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to database
connectDB();

const app = express();

// Init middleware
app.use(cors());
app.use(express.json());

// Define routes
app.use('/api/truths', require('./routes/truths'));
app.use('/api/dares', require('./routes/dares'));
app.use('/api/users', require('./routes/users'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
