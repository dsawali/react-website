import React, { Component } from 'react';

const SkillEntry = (props) => {
    return (
        <>
            <span>{ props.category }</span>
            <br></br>
            {props.entry.map(x => {
                return( <p> {x} </p> );
            })}
        </>
    );
};

export default SkillEntry;