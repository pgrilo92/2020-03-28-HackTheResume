import React from 'react'
import './Work.css'

const Work = (props) => {
    return (
        <div className="work">
            <h3>{props.work[0].company}</h3>
            <p>Position: {props.work[0].position}</p>
            <p>Start Date: {props.work[0].startDate} &nbsp; End Date: {props.work.endDate}</p>
            <p>Summary: {props.work[0].summary}</p>
            <p>Highlights: {props.work[0].highlights}</p>
        </div>
    )
}

export default Work