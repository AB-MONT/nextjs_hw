"use client";

import { useState, useEffect } from "react";

export default function Store() {
    const [products, setProducts] = useState<any[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main>
            <h1>Store</h1>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            <table border={1}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    width="100"
                                    height="100"
                                    style={{ objectFit: "contain" }}
                                />
                            </td>

                            <td>{product.title}</td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />

            <a href="/">Home</a>
        </main>
    );
}