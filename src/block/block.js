import React from 'react';
import './block.css';

function block(props) {
    return (
        <div className={`block ${props.aisle ? 'aisle' : ''}`}>
        
        </div>
    );
}

export default block;