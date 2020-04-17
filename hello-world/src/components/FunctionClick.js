import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            {/* don't use "clickHandler()", because its a function call */}
        </div>
    )
}

export default FunctionClick
