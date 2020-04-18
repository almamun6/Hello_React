import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }


    render() {
        // 1st approach
        // if (this.state.isLoggedin) {
        //     return (<div>Welcome React</div>)
        // }
        // else {
        //     return (<div>Welcome Guest</div>)
        // }
        // note: if else condition don't work inside JSX


        // 2nd approach
        // let message
        // if (this.state.isLoggedin) {
        //     message = <div>Welcome React</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>


        // 3rd approach  //turnary operator approach
        // return (
        //     this.state.isLoggedin ?
        //         <div>Welcome React</div> :
        //         <div>Welcome Guest</div>
        // )


        //4th approach   // Short circuit operator approach
        return this.state.isLoggedin && <div>Welcome React</div>
        // if you want to print if true or nothing if false




    }
}

export default UserGreeting
