import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import './UniqueCards.css';

class UniqueCards extends Component {
    generateList(array){
        return array.map(elem => {
            return (
                <Link to={`/card/${elem.id}`} className={'unique_card'} key={elem.id}>
                    <div onClick={() =>this.props.selectCard('card', elem)}>
                        <img src={elem.img} alt="little_logo" />
                        <h3>{elem.city}</h3>
                        <p>{elem.text}</p>
                        <span>от {elem.price}</span>

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