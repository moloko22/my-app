import React, {Component} from 'react';

import './OrderCard.css';

class OrderCard extends Component {
    render() {
        console.log(this.props.item);
        return (
            <section className={'order_card'}>
                <div className={'order_card_header'}>
                    <div className={'order_card_header_dates'}>
                        <p><span>Заявка от {this.props.item.dateOrder[1]} {this.props.item.dateOrder[0]} {this.props.item.dateOrder[2]}</span></p>
                        <p><span>Срок аренды: </span>{this.props.item.dateFrom[1]} {this.props.item.dateFrom[0]} - {this.props.item.dateTo[1]} {this.props.item.dateTo[0]}</p>
                    </div>
                    <div className={'order_card_header_status'}>
                        <p>{this.props.item.status}</p>
                    </div>
                </div>
                <div className={'order_card_body'}>
                    <div className={'order_card_info'}>
                        <h3>{this.props.item.header}</h3>
                        <h4>{this.props.item.city}, {this.props.item.company}</h4>
                        <p>{this.props.item.text}</p>
                        <p><span>{this.props.item.comment ? 'Комментарий' : null}</span></p>
                        <p>{this.props.item.comment ? this.props.item.comment : null}</p>
                    </div>
                    <div className={'order_card_image_wrapper'}>
                        <div className={'order_card_image'}>
                            <img src={this.props.item.img} alt="image_item"/>
                        </div>
                        <div className={'order_card_quantity'}>
                            <p>Количество: {this.props.item.quantity}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OrderCard;