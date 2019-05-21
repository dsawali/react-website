import React, { Component } from 'react';

const InfoButton = ({technology}) => {
    return technology.map(item => (
        <span className='technology info-btn'>{ item.text }</span>
    ));
};

export default InfoButton;