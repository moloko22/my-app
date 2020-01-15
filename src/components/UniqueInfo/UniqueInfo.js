import React from 'react';

import './UniqueInfo.css';
function UniqueInfo(props){
    return(
        <div className={'unique_info'}>
            <h3>{props.header}</h3>
            <p>{props.text}</p>
        </div>
    )
}
export default UniqueInfo;

