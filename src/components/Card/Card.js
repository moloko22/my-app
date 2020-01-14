import React from 'react';

function Card(props){
    const onClickHandle = () =>{
        console.log('Заказано!')
    };
    return(
        <div>
            <h3>{props.card.header}</h3>
            <p className={'about'}>{props.card.text}</p>
            <button onClick={onClickHandle}>Заказать</button>
            <p className={'price'}>{props.card.price}$</p>
        </div>
    )
}

export default Card;