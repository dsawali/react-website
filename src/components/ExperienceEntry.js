import React, { Component } from 'react';
import './ExperienceEntry.css';


const ExperienceEntry = (props) => {
    return (
        <>
            <div className="experience-title">
                { props.expData.map(x => {
                    return( 
                        <div className="experience-entry">
                            <span id="exp-title"> {x.title} </span>
                            <span id="exp-company"> {x.company} </span>
                            <span id="exp-date"> {x.date} </span> 
                        </div>
                    ) 
                })} 
            </div>
        </>
    );
};

export default ExperienceEntry;