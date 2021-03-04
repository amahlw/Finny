import React from 'react';

class Band extends React.Component {
    render() {
        return <div>
            <h1>band name = {this.props.bandName}</h1>
        </div>
    }
}
export default Band;