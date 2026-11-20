"use client";

import { useState } from "react";

function CountButton({
    increment,
    color
}: {
    increment: number;
    color: string;
}) {
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

export default function Counter() {
    return (
        <main>
            <h1>Counter Applications</h1>

            <CountButton increment={1} color="red" />

            <CountButton increment={2} color="darkblue" />

            <br />

            <a href="/">Home</a>
        </main>
    );
}