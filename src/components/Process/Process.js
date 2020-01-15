import React from 'react';
import './Process.css';

function Process(props){
    return(
        <section className={'process'}>
            <div className={'process_header'}>
                <h3>{props.process.header}</h3>
                <p>{props.process.text}</p>
            </div>
            <div className={'process_images'}>

            </div>
        </section>
    )
};

export default Process;