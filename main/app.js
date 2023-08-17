const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

// Simulated product data
const products = [
    { id: 1, name: 'Product 1', price: 49.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more products here
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
