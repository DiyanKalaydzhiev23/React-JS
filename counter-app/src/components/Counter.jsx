import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={() => setCount(count+1)}>+</button>
            </div>
            
            <label htmlFor="numberSet">Set a number: </label>
            <input type="number" onChange={(e) => setCount(Number(e.target.value))} />
        </>    
    );
}

export default Counter;