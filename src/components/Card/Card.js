import React, {Component} from 'react';

import { DatePicker, InputNumber } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import './Card.css';
const dateFormat = 'YYYY.MM.DD';

class Card extends Component {
    onClickHandle = (e) =>{
        e.preventDefault();
        this.props.orderRequest(this.props.card);
    };
    onChange(name, value) {
        const orderDate = new Date();
        if(!name || !value) return;
        if(name === 'dateFrom' || name === 'dateTo'){
            this.props.card[name] = value._d.toString().split(' ', 4);
            console.log(this.props.card);
            this.props.card.orderDate = [orderDate.getDay(),orderDate.getMonth(), orderDate.getFullYear(), orderDate.getDate()];
            console.log(this.props.card);
            this.props.card.quantity = 1;
        }
        if(name === 'quantity'){
            this.props.card.quantity = value;
        }
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
                        <form action={''}>
                            <label htmlFor="date_from">Начало аренды</label>
                            <DatePicker name={'dataFrom'}
                                        onChange={(e) => this.onChange('dateFrom', e)}
                                        defaultValue={moment('2020.01.01', dateFormat)}
                                        format={dateFormat} />
                            <label htmlFor="date_to">Конец аренды</label>
                            <DatePicker onChange={(e) => this.onChange('dateTo', e)}
                                        name={'dataFrom'}
                                        defaultValue={moment('2020.01.01', dateFormat)}
                                        format={dateFormat} />
                            <label htmlFor="quantity">Количество</label>
                            <InputNumber min={1}
                                         name={'quantity'}
                                         max={100}
                                         defaultValue={1}
                                         onChange={(e) =>this.onChange('quantity', e)} />
                            <button onClick={(e) => this.onClickHandle(e)}>Отправить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;