import React from 'react'
import './References.css'

const References = (props) => {
    return (
        <div className="references">
            <h4>References</h4>
            <p>{props.references[0].name}</p>
            <p>{props.references[0].reference}</p>
        </div>
    )
}


export default References