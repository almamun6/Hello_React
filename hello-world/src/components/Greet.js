import React from 'react'

// function Greet () {
//     return <h1>Hello World</h1>
// }

//it is recommended to use ES6 fat arrow function, though commented code above will works the same
// export const Greet = ()=> <h1>Hello World</h1>
const Greet = (props) => {
    return (
        <div>
            <h1>
                Hello {props.name}, {props.age}
            </h1>
            {props.children}
        </div>
    )
}

export default Greet