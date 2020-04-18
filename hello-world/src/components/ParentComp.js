import React, { PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            name: 'React'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'React'
            })
        }, 2000)
    }

    render() {
        console.log('**********Parent Comp Render**********')

        return (
            <div>
                Parent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />

            </div>
        )
    }
}

export default ParentComp
