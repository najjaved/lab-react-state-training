import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const increment =()=> {
        setCount(count +1);

    }
    const decrement =()=> {
        count>0? setCount(count -1):count;
   
    }
    return ( 
        <div className="counter">
            <button type = 'button' onClick={decrement}> - </button>
            <p> {count} </p>
            <button type = 'button' onClick={increment}>  + </button>
        </div>

    );
}

export default Counter;