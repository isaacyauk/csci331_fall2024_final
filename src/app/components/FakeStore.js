"use client";

import React, { useState, useEffect } from 'react';

// Define the component
const FakeStore = () => {
    // State for storing products and the search term
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch products from Fake Store API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products?limit=20");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    // Filter products based on search term
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Product List</h2>
            <p>Call: 248 434-5508 and give the operator ANY & ALL info they request, and we'll get these products to you at a HUGELY discounted rate!</p>
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
            />

            {/* Products Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Title</th>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Image</th>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Price ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{product.title}</td>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
                                <img src={product.image} alt={product.title} width="50" height="50" />
                            </td>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{product.price.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FakeStore;
