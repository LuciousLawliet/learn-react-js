import React, {Component} from "react";

class HelloCars extends Component {
    render() {
        return (
            <div>
                <h1>Mobil {this.props.car} mewah sekali</h1>
                {this.props.price}
            </div>
        )
    }
}

export default HelloCars