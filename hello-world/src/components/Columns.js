import React from 'react'

function Columns() {
    const items = [
        { id: 1, title: 'Foo' },
        { id: 2, title: 'Moo' }
    ]
    return (

        <React.Fragment>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <td>Title</td>
                        <td>{item.title}</td>
                    </React.Fragment>
                ))
            }

            <td>Name</td>
            <td>React</td>
        </React.Fragment>


        // // There is another way to use fragment
        // <>
        //     <td>Name</td>
        //     <td>React</td>
        // </>
        // // Note: You can't pass in the key attribute here

    )
}

export default Columns
