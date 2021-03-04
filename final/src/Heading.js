import React from 'react';
import ReactDOM from 'react-dom';

class Heading extends React.Component {
    render() {
        return <h2>FEW 1.2 Final Assessment
            {this.props.name} </h2>;
    }
}
export default Heading;