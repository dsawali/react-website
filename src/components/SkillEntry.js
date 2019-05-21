import React, { Component } from 'react';
import './SkillEntry.css';

const SkillEntry = (props) => {
    return (
        <>
            <span className="skills-category">{ props.category }</span>
            <br></br>
            {props.entry.map(x => {
                return( <p className="skills-entry"> {x} </p> );
            })}
        </>
    );
};

export default SkillEntry;