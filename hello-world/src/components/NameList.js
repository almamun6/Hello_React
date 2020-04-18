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
            name: 'React',
            age: 7
        },
        {
            name: 'Angular',
            age: 10
        },
        {
            name: 'Node',
            age: 9
        }
    ]
    const personList = persons.map(persn => <Person persn={persn} />)
    return <div>{personList}</div>
}

export default NameList
