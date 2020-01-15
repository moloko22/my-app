import React from 'react';

import './Card.css';
function Card(props){
    const onClickHandle = () =>{
        console.log('Заказано!')
    };
    return(
        <div className={'one_card_wrapper'}>
            <div className={'one_card'}>
                <div className={'one_card_image'}>
                    <img src={`${props.card.img}`} alt=""/>
                </div>
                <div className={'one_card_info'}>
                    <h3>{props.card.header}</h3>
                    <p className={'about'}>{props.card.text}</p>
                    <p className={'about'}>Компания:{props.card.company}</p>
                    <p className={'about'}>Год выпуска оборудования:{props.card.year}</p>
                    <p className={'about'}>Возможна доставка с {props.card.date}</p>
                    <button onClick={onClickHandle}>Заказать</button>
                    <p className={'price'}>{props.card.price} руб.</p>
                </div>
            </div>
        </div>
    )
}

export default Card;