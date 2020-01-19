import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import './SearchPageCard.css'

class SearchPageCard extends Component {
    generateListCard(array){
        if(!array.length && !Array.isArray(array)) return;
        return array.map(elem => {
            return (
                <Link to={`/card/${elem.id}`} className={'unique_card_link_search'} key={elem.id}>
                    <div  className={'unique_card_search'} onClick={() =>this.props.selectCard('card', elem)}>
                        <div className={'unique_card_image_search'}>
                            <img src={elem.img} alt="little_logo" />
                        </div>
                        <div className={'unique_card_info_search'}>
                            <h3>{elem.header}</h3>
                            <h4>{elem.city}</h4>
                            <p>{elem.text}</p>
                            <p><span>{elem.price} руб.</span> за сутки</p>
                        </div>
                    </div>
                </Link>
            )
        })
    }
    render() {
        return (
            <div className={'unique_cards_search'}>
                {this.generateListCard(this.props.cards)}
            </div>
        );
    }
}

export default SearchPageCard;