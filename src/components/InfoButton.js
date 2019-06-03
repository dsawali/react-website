import React, { Component } from './node_modules/react';

const InfoButton = ({technology}) => {
    return technology.map(item => (
        <span className='technology info-btn'>{ item.text }</span>
    ));
};

export default InfoButton;