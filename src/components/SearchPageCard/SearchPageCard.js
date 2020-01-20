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
                            <h4>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0C4.89838 0 2.375 2.52338 2.375 5.625C2.375 6.67294 2.66528 7.69563 3.21466 8.58288L7.67981 15.7784C7.76534 15.9163 7.91603 16 8.07809 16C8.07934 16 8.08056 16 8.08181 16C8.24528 15.9987 8.39628 15.9124 8.48025 15.7721L12.8316 8.50688C13.3507 7.63838 13.625 6.64184 13.625 5.625C13.625 2.52338 11.1016 0 8 0ZM12.0271 8.02556L8.071 14.6308L4.01147 8.08894C3.55419 7.35044 3.30625 6.49844 3.30625 5.625C3.30625 3.04031 5.41531 0.93125 8 0.93125C10.5847 0.93125 12.6906 3.04031 12.6906 5.625C12.6906 6.47253 12.459 7.30275 12.0271 8.02556Z" fill="black"/>
                                    <path d="M8 2.8125C6.44919 2.8125 5.1875 4.07419 5.1875 5.625C5.1875 7.16591 6.42866 8.4375 8 8.4375C9.59072 8.4375 10.8125 7.14897 10.8125 5.625C10.8125 4.07419 9.55081 2.8125 8 2.8125ZM8 7.50625C6.96072 7.50625 6.11875 6.66147 6.11875 5.625C6.11875 4.59113 6.96613 3.74375 8 3.74375C9.03387 3.74375 9.87813 4.59113 9.87813 5.625C9.87813 6.64634 9.05575 7.50625 8 7.50625Z" fill="black"/>
                                </svg>
                                <span>{elem.city}</span>, {elem.company}</h4>
                            <p>{elem.text.substr(0, 240)}...</p>
                            <p><span>от {elem.price} руб.</span></p>
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