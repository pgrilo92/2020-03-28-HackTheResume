import React from 'react'
import './basics.css'

const Basics = (props) => {
    return (
        <div className="basics" >
            <p>Title: {props.basics.label}</p>
            <p>Email: {props.basics.email}</p>
            <p>Phone: {props.basics.phone}</p>
            <p>Website: {props.basics.website}</p>
            <p>Summary: {props.basics.summary}</p>
            <p>Address: {props.basics.location.address}</p>
            <p>{props.basics.location.city}, {props.basics.location.countryCode}</p>
            <p>{props.basics.location.region}</p>
        </div>
    )
}

export default Basics
