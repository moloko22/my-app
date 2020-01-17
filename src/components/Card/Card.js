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
        console.log(array);
        let obj = [];
        if(array[0] === 'Mon' || array[0] === 1){
            obj[0] = 'Понедельник'
        }
        if(array[0] === 'Tue' || array[0] === 2){
            obj[0] = 'Вторник'
        }
        if(array[0] === 'Wed' || array[0] === 3){
            obj[0] = 'Среда'
        }
        if(array[0] === 'Thu' || array[0] === 4){
            obj[0] = 'Четверг'
        }
        if(array[0] === 'Fri' || array[0] === 5){
            obj[0] = 'Пятница'
        }
        if(array[0] === 'Sut' || array[0] === 6){
            obj[0] = 'Суббота'
        }
        if(array[0] === 'Sun' || array[0] === 7){
            obj[0] = 'Воскресенье'
        }
        if(array[1] === 0 || array[1] === 'Jan') {
            obj[1] = 'Января'
        }
        if(array[1] === 1 || array[1] === 'Feb'){
            obj[1] = 'Февраля'
        }
        if(array[1] === 2 || array[1] === 'Mar'){
            obj[1] = 'Марта'
        }
        if(array[1] === 3 || array[1] === 'Apr'){
            obj[1] = 'Апреля'
        }
        if(array[1] === 4 || array[1] === 'May'){
            obj[1] = 'Мая'
        }
        if(array[1] === 5 || array[1] === 'Jun'){
            obj[1] = 'Июня'
        }
        if(array[1] === 6 || array[1] === 'Jul'){
            obj[1] = 'Июля'
        }

        if(array[1] === 7 || array[1] === 'Aug'){
            obj[1] = 'Августа'
        }

        if(array[1] === 8 || array[1] === 'Sep'){
            obj[1] = 'Сентября'
        }
        if(array[1] === 9 || array[1] === 'Oct'){
            obj[1] = 'Октрября'
        }
        if(array[1] === 10 || array[1] === 'Nov'){
            obj[1] = 'Ноября'
        }
        if(array[1] === 11 || array[1] === 'Dec'){
            obj[1] = 'Декарбря'
        }
        if(array[2] === '01'){
            obj[2] = 1;
        }
        if(array[2] === '02'){
            obj[2] = 2;
        }
        if(array[2] === '03'){
            obj[2] = 3;
        }
        if(array[2] === '04'){
            obj[2] = 4;
        }
        if(array[2] === '05'){
            obj[2] = 5;
        }
        if(array[2] === '06'){
            obj[2] = 6;
        }
        if(array[2] === '07'){
            obj[2] = 7;
        }
        if(array[2] === '08'){
            obj[2] = 8;
        }
        if(array[2] === '09'){
            obj[2] = 9;
        }
        if(typeof array[2] === 'number' && array[2] > 9 && array[2] < 32){
            obj[2] = array[2];
        }
        if(typeof array[3] === 'string'){
            obj[3] = +array[3];
        }else{
            obj[3] = array[3];
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
            console.log(this.props.card);
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