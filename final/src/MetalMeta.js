import data from './metal.json'
import React from 'react';
import ReactDOM from 'react-dom';



const bands = data.map(({ band_name, fans, formed, orgin }) => {

    return MetalMeta(
        band_name = { band_name },
        fans = { fans },
        formed = { formed },
        orgin = { orgin }

    )
})
function MetalMeta() {
    return (
        <div className="MetalMeta">
            { bands}
        </div>
    )
}

export default MetalMeta