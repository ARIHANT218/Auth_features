const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use(cors({ origin: 'https://auth-features.vercel.app/' }));
connectDB();


app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use('/api/users', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
