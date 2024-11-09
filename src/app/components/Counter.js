"use client";

import React, { useState } from 'react';

function Counter({incrementBy, buttonColor }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const newCount = count + incrementBy;
        setCount(newCount > 10 ? 0 : newCount);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button
            onClick={handleIncrement}
            style={{backgroundColor: buttonColor}}
            >
                Increment by {incrementBy}
            </button>
        </div>
    );
}

export default Counter;