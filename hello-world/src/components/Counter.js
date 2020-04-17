import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        //this.state.count = this.state.count + 1
        //"this.state" can be only assigned in constructor, otherwise it won't work
        //so we use "this.setState"

        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('Callback value', this.state.count)
        })
        console.log(this.state.count)
        /*calls to "setState" are asynchronous so that, this "console.log" is being called before the state
        is actually set. you will find that the console value is 1 less then the rendered value
        
        so we used callback function*/
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
