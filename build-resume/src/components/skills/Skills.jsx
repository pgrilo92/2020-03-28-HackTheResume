import React from 'react'
import './Skills.css'

const Skills = (props) => {
    return (
        <div className="skills">
            <h3>Skills</h3>
            <p>{props.skills[0].name}</p>
            <p>{props.skills[0].level}</p>
            <p>{props.skills[0].keywords}</p>
        </div>
    )
}


export default Skills
