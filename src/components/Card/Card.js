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
    changeDateFormat(array){
        array.splice(0, 1);
        let obj = [];
        if(array[0] === 0 || array[0] === 'Jan') {
            obj[0] = 'Января'
        }
        if(array[0] === 1 || array[0] === 'Feb'){
            obj[0] = 'Февраля'
        }
        if(array[0] === 2 || array[0] === 'Mar'){
            obj[0] = 'Марта'
        }
        if(array[0] === 3 || array[0] === 'Apr'){
            obj[0] = 'Апреля'
        }
        if(array[0] === 4 || array[0] === 'May'){
            obj[0] = 'Мая'
        }
        if(array[0] === 5 || array[0] === 'Jun'){
            obj[0] = 'Июня'
        }
        if(array[0] === 6 || array[0] === 'Jul'){
            obj[0] = 'Июля'
        }

        if(array[0] === 7 || array[0] === 'Aug'){
            obj[0] = 'Августа'
        }

        if(array[0] === 8 || array[0] === 'Sep'){
            obj[0] = 'Сентября'
        }
        if(array[0] === 9 || array[0] === 'Oct'){
            obj[0] = 'Октрября'
        }
        if(array[0] === 10 || array[0] === 'Nov'){
            obj[0] = 'Ноября'
        }
        if(array[0] === 11 || array[0] === 'Dec'){
            obj[0] = 'Декарбря'
        }
        if(array[1] === '01'){
            obj[1] = 1;
        }
        if(array[1] === '02'){
            obj[1] = 2;
        }
        if(array[1] === '03'){
            obj[1] = 3;
        }
        if(array[1] === '04'){
            obj[1] = 4;
        }
        if(array[1] === '05'){
            obj[1] = 5;
        }
        if(array[1] === '06'){
            obj[1] = 6;
        }
        if(array[1] === '07'){
            obj[1] = 7;
        }
        if(array[1] === '08'){
            obj[1] = 8;
        }
        if(array[1] === '09'){
            obj[1] = 9;
        }
        if(typeof array[1] === 'number' && array[1] > 9 && array[1] < 32){
            obj[1] = array[1];
        }
        if(typeof array[2] === 'string'){
            obj[2] = +array[2];
        }else{
            obj[2] = array[2];
        }
        return obj;
    }
    onChange(name, value) {
        const orderDate = new Date();
        if(!name || !value) return;
        if(name === 'dateFrom' || name === 'dateTo'){
            this.props.card[name] = this.changeDateFormat(value._d.toString().split(' ', 4));
            this.props.card.dateOrder = this.changeDateFormat([orderDate.getDay(), orderDate.getMonth(), orderDate.getDate(), orderDate.getFullYear()]);
            this.props.card.quantity = 1;
        }
        if(name === 'quantity'){
            this.props.card.quantity = value;
        }
        if(name === 'comment'){
            this.props.card.comment = value;
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
                            <label htmlFor="date_from">Начало аренды:</label>
                            <DatePicker name={'dataFrom'}
                                        onChange={(e) => this.onChange('dateFrom', e)}
                                        defaultValue={moment('2020.01.01', dateFormat)}
                                        format={dateFormat} />
                            <label htmlFor="date_to">Конец аренды:</label>
                            <DatePicker onChange={(e) => this.onChange('dateTo', e)}
                                        name={'dataFrom'}
                                        defaultValue={moment('2020.01.01', dateFormat)}
                                        format={dateFormat} />
                            <label htmlFor="quantity">Количество:</label>
                            <InputNumber min={1}
                                         name={'quantity'}
                                         max={100}
                                         defaultValue={1}
                                         onChange={(e) =>this.onChange('quantity', e)} />
                            <label htmlFor="comment">Комментарий:</label>
                            <textarea id={'comment'}
                                      onChange={(e) => this.onChange('comment', e.target.value)}
                            />
                            <button onClick={(e) => this.onClickHandle(e)}>Отправить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;