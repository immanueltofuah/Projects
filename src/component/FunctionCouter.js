import React, { useState } from 'react'

const FunctionCounter = ()=>{
    const [count, setCount] = useState(0);

    function handleIncrease() {
        setCount(count + 1);
    }

    function handleDecrease() {
        setCount(count - 1);
    }


    return(
        <>
        <h1 className= "display">{count} </h1>
        <div>
            <button onClick={()=> handleDecrease()} className='cont-button'>Decrease Count </button>
            <button onClick={()=> handleIncrease()} className='cont-button'>Increase Count </button>

        </div>
        </>
    )
}
export default FunctionCounter;