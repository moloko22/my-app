import React from 'react';

import './HowStart.css';

function HowStart(props){
    return(
        <div className={'how_start'}>
            <div className={'how_start_info'}>
                <h3>{props.start.header}</h3>
                <p>{props.start.text}</p>
                <a onClick={() => props.sendRequest()}
                >Найти оборудование</a>
            </div>
        </div>
    )
}

export default HowStart;