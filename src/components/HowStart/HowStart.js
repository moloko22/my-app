import React from 'react';

import './HowStart.css';
import {Link} from "react-router-dom";

function HowStart(props){
    return(
        <div className={'how_start'}>
            <div className={'how_start_info'}>
                <h3>{props.start.header}</h3>
                <p>{props.start.text}</p>
                <Link to={'/search'}
                      onClick={() => props.sendRequest()}
                >Найти оборудование</Link>
            </div>
        </div>
    )
}

export default HowStart;