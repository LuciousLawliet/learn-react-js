import React, {Component} from "react";

class HelloJomblo extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Fadel',
            status: 'Jomblo',
            harta: '5 Miliar'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Irham',
            status: 'Single',
            harta: '100 Miliar'
        })
    }

    resetMessage() {
        this.setState({
            message: 'Fadel',
            status: 'Jomblo',
            harta: '5 Miliar'
        })
    }
    
    render() {
        return (
            <div>
                <h1>Hello {this.state.message}, kamu {this.state.status} ya? Tapi kamu punya harta {this.state.harta} rupiah </h1>
                <button onClick={() => this.changeMessage()}>Saya Sudah Punya Pacar!</button>
                <button onClick={() => this.resetMessage()}>Reset</button>
            </div>
        )
    }
}

export default HelloJomblo