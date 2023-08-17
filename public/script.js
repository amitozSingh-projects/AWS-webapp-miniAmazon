document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    // Fetch products from the server
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productItem = document.createElement('li');
                productItem.innerHTML = `
                    <img src="product-image.jpg" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <button>Add to Cart</button>
                `;
                productList.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
