import React, { Component } from 'react';
import './ExperienceEntry.css';

const SkillEntry = (props) => {
    return (
        <>
            <div className="skills-category">
                <span>{ props.category } </span>
            </div>
            <div className="skills-entry-wrapper">
            {props.entry.map(x => {
                return( <span className="skills-entry"> {x} </span> );
            })}
            </div>
        </>
    );
};

export default SkillEntry;