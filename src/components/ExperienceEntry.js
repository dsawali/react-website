import React, { Component } from 'react';
import './ExperienceEntry.css';


const ExperienceEntry = (props) => {
    return (
            <>
                {props.expData.map(x => {
                    return( 
                        <div className="content-experience">
                            <div className="experience-title">
                                <span> {x.title}, {x.company} </span>
                            </div>
                            <div className="experience-entry-wrapper">
                                <span id="exp-date" className="experience-entry"> {x.date} </span> 
                            </div>
                        </div>
                    ) 
                })} 
            </>
    );
};

export default ExperienceEntry;