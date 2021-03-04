import data from './metal.json'
import React from 'react';


class MetalMeta extends React.Component {
    bands = data.map(({ band_name, fans, formed, orgin }) => {

        return <this.bands
            band_name={band_name}
            fans={fans}
            formed={formed}
            orgin={orgin}
        />
    })

    render() {
        return (
            <div className="MetalMeta">
                { this.bands}
            </div>
        )
    }
}

export default MetalMeta