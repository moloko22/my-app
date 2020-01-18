import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import './UniqueCards.css';

class UniqueCards extends Component {
    generateList(array){
        if(!array.length && !Array.isArray(array)) return;
        return array.map(elem => {
            return (
                <Link to={`/card/${elem.id}`} className={'unique_card_link'} key={elem.id}>
                    <div  className={'unique_card'} onClick={() =>this.props.selectCard('card', elem)}>
                        <div className={'unique_card_image'}>
                            <img src={elem.img} alt="little_logo" />
                        </div>
                        <div className={'unique_card_info'}>
                            <h3>{elem.city}</h3>
                            <h4>{elem.header}</h4>
                            <p><span>{elem.price} руб.</span> за сутки</p>
                        </div>
                    </div>
                </Link>
            )
        })
    }
    render() {
        return (
            <div className={'unique_cards'}>
                {this.generateList(this.props.cards)}
            </div>
        );
    }
}

export default UniqueCards;