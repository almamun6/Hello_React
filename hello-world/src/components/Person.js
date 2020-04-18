import React from 'react'

const Person = ({ persn }) => {
    return (
        <div>
            <h1>I am {persn.name} and I am {persn.age} years old</h1>
        </div>
    )
}

export default Person
