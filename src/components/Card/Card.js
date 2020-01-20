import React, {Component} from 'react';

import { DatePicker, InputNumber } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import './Card.css';
const dateFormat = 'YYYY.MM.DD';

class Card extends Component {
    onClickHandle = (e) =>{
        e.preventDefault();
        this.onChange();
        this.props.orderRequest(this.props.card);
    };
    changeDateFormat(array){
        array.splice(0, 1);
        console.log('Показываю массив');
        console.log(array);
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
        if(typeof array[1] === 'string'){
            array[1] = +array[1];
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
        if(!name && !value ){
            this.props.card.dateFrom = this.changeDateFormat([orderDate.getDay(), orderDate.getMonth(), orderDate.getDate(), orderDate.getFullYear()]);
            this.props.card.dateTo = this.changeDateFormat([orderDate.getDay(), orderDate.getMonth(), orderDate.getDate(), orderDate.getFullYear()]);
            this.props.card.quantity = 1;
            this.props.card.dateOrder = this.changeDateFormat([orderDate.getDay(), orderDate.getMonth(), orderDate.getDate(), orderDate.getFullYear()]);
        }
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
                <div className={'one_card_go_back_link'}>
                    <svg width="8" height="13" viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12L1 6.5L7 1" stroke="#191D31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <a onClick={() =>this.props.changeHistory('/search')}>Назад к списку</a>
                </div>
                <div className={'one_card'}>
                    <div className={'one_card_images'}>
                        <img src={`${this.props.card.img}`} alt=""/>
                    </div>
                    <div className={'one_card_info'}>
                        <h3>{this.props.card.header}</h3>
                        <h4><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C4.89838 0 2.375 2.52338 2.375 5.625C2.375 6.67294 2.66528 7.69563 3.21466 8.58288L7.67981 15.7784C7.76534 15.9163 7.91603 16 8.07809 16C8.07934 16 8.08056 16 8.08181 16C8.24528 15.9987 8.39628 15.9124 8.48025 15.7721L12.8316 8.50688C13.3507 7.63838 13.625 6.64184 13.625 5.625C13.625 2.52338 11.1016 0 8 0ZM12.0271 8.02556L8.071 14.6308L4.01147 8.08894C3.55419 7.35044 3.30625 6.49844 3.30625 5.625C3.30625 3.04031 5.41531 0.93125 8 0.93125C10.5847 0.93125 12.6906 3.04031 12.6906 5.625C12.6906 6.47253 12.459 7.30275 12.0271 8.02556Z" fill="black"/>
                            <path d="M8 2.8125C6.44919 2.8125 5.1875 4.07419 5.1875 5.625C5.1875 7.16591 6.42866 8.4375 8 8.4375C9.59072 8.4375 10.8125 7.14897 10.8125 5.625C10.8125 4.07419 9.55081 2.8125 8 2.8125ZM8 7.50625C6.96072 7.50625 6.11875 6.66147 6.11875 5.625C6.11875 4.59113 6.96613 3.74375 8 3.74375C9.03387 3.74375 9.87813 4.59113 9.87813 5.625C9.87813 6.64634 9.05575 7.50625 8 7.50625Z" fill="black"/>
                        </svg>
                            <span>{this.props.card.city}</span>, {this.props.card.company}</h4>
                        <p>{this.props.card.text}</p>
                    </div>
                    <div className={'one_card_form'}>
                        <p>{this.props.card.price} руб. за сутки</p>
                        <form action={''}>
                            <div className={'inputs'}>
                                <div className={'inputs_labels'}>
                                    <label htmlFor="date_from">Начало аренды</label>
                                    <DatePicker name={'dataFrom'}
                                                required
                                                onChange={(e) => this.onChange('dateFrom', e)}
                                                defaultValue={moment('2020.01.01', dateFormat)}
                                                format={dateFormat} />

                                </div>
                                <div className={'inputs_labels'}>
                                    <label htmlFor="date_to">Конец аренды</label>
                                    <DatePicker onChange={(e) => this.onChange('dateTo', e)}
                                                required
                                                name={'dataFrom'}
                                                defaultValue={moment('2020.01.01', dateFormat)}
                                                format={dateFormat} />
                                </div>
                            </div>
                            <label htmlFor="quantity">Количество</label>
                            <InputNumber min={1}
                                         name={'quantity'}
                                         max={100}
                                         defaultValue={1}
                                         onChange={(e) =>this.onChange('quantity', e)} />
                            <label htmlFor="comment">Комментарий</label>
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