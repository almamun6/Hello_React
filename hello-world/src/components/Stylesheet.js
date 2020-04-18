import React from 'react'
import './myStyles.css'

function Stylesheet() {
    // return (
    //     <div>
    //         <h1 className='primary font-xl'>Stylesheet</h1>
    //     </div>
    // )

    //if you want to use conditions for styling
let val = true
let clsName = val ? 'primary' : ''

    return (
        <div>
            <h1 className={`${clsName} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
