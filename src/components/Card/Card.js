import React, {Component} from 'react';

import { DatePicker, InputNumber } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import './Card.css';
const dateFormat = 'YYYY/MM/DD';

class Card extends Component {

    onClickHandle = () =>{
        console.log('Заказано!')
    };
    onChange(value) {
        console.log('changed', value);
    }
    render() {
        return (
            <div className={'one_card_wrapper'}>
                <div className={'one_card'}>
                    <div className={'one_card_images'}>
                        <img src={`${this.props.card.img}`} alt=""/>
                    </div>
                    <div className={'one_card_info'}>
                        <h3>{this.props.card.header}</h3>
                        <h4>{this.props.card.city}, {this.props.card.company}</h4>
                        <p>{this.props.card.text}</p>
                    </div>
                    <div className={'one_card_form'}>
                        <p><span>{this.props.card.price} руб.</span> за сутки</p>
                        <form action="">
                            <label htmlFor="date_from">Начало аренды</label>
                            <DatePicker defaultValue={moment('2020/01/01', dateFormat)} format={dateFormat} />
                            <label htmlFor="date_to">Конец аренды</label>
                            <DatePicker defaultValue={moment('2020/01/01', dateFormat)} format={dateFormat} />
                            <label htmlFor="quantity">Количество</label>
                            <InputNumber min={1} max={100} defaultValue={3} onChange={this.onChange} />
                            <button onClick={this.onClickHandle}>Отправить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;