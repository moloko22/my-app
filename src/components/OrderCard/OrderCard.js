import React, {Component} from 'react';

import './OrderCard.css';

class OrderCard extends Component {
    render() {
        return (
            <section className={'order_card'}>
                <div className={'order_card_header'}>
                    <p>Заявка от {this.props.item.date}</p>
                    <p>{this.props.item.status}</p>
                </div>
                <div className={'order_card_body'}>
                    <div className={'order_card_info'}>
                        <h3>{this.props.item.header}</h3>
                        <h4>{this.props.item.city}, {this.props.item.company}</h4>
                        <p>{this.props.item.text}</p>
                        <p><span>Срок аренды: </span>{this.props.item.date} - {this.props.item.date}</p>
                        <button>Подробнее</button>
                    </div>
                    <div className={'order_card_image'}>
                        <img src={this.props.item.img} alt="image_item"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default OrderCard;