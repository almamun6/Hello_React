import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['React','Angular','Node']    
    // return (
    //     <div>
    //         {
    //             names.map(nm => <h2>{nm}</h2>)
    //         }
    //     </div>
    // )

    // or

    // const names = ['React','Angular','Node']  
    // const nameList = names.map(nm => <h2>{nm}</h2>)
    // return (
    //     <div>{nameList}</div>
    // )


    //or, to be extended

    const persons = [
        {
            id: 1,
            name: 'React',
            age: 7
        },
        {
            id: 2,
            name: 'Angular',
            age: 10
        },
        {
            id: 3,
            name: 'Node',
            age: 9
        }
    ]
    const personList = persons.map((persn, index) => <Person key={index} persn={persn} />)
    return <div>{personList}</div>
}

export default NameList
