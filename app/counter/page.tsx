"use client";

import { useState, useEffect } from "react";

function CountButton({ increment, color }: { increment: number; color: string }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((previous) => {
            const newCount = previous + increment;

            if (newCount > 10) {
                return 0;
            }

            return newCount;
        });
    }

    return (
        <>
            <button
                onClick={handleClick}
                style={{ backgroundColor: color }}
            >
                +{increment}
            </button>

            <div>{count}</div>
        </>
    );
}

function Store() {
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
        <>
            <h2>Store</h2>

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
        </>
    );
}


export default function Page() {

    
    return (
        <main>
            <h1>JSX Process</h1>

            <h2>Counter Applications</h2>

            <CountButton increment={1} color="red" />

            <CountButton increment={2} color="darkblue" />

            <hr />

            <h2>Final Project Description</h2>
                <p>Github repo link: <a href="https://github.com/AB-MONT/nextjs_hw">Repository</a></p>
                <p>description</p>

            <hr />
            
            <Store />


            
        </main>
    );
}
        
        
        