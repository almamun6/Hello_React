import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    // for 1st 2nd and 3rd approach
    // clickHandler() {
    //     this.setState({
    //         message: 'Good bye'
    //     })
    //     console.log(this)
    // }


    // for 4th approach
    clickHandler = () => {
        this.setState({
            message: 'Good bye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* first approach  */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* second approach */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* Third approach
                Add this line below to the constructor
                this.clickHandler = this.clickHandler.bind(this) */}
                {/* <button onClick={this.clickHandler}>Click</button> */}

                {/* Fourth approach */}
                <button onClick={this.clickHandler}>Click</button>


                {/* However, React documentation suggests to use approach no 3 or 4 */}
            </div>
        )
    }
}

export default EventBind
