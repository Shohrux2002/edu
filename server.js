const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');



const app = express();
app.use(cors());
app.use(bodyParser.json());
const path = require('path');
app.use('/api', authRoutes);
app.use('/api', productRoutes);
app.use('/api/products', require('./routes/products'));
app.use('/products', productRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));   



app.listen(5000, () => console.log('Server running on http://localhost:5000'));