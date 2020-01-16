import React, {Component} from 'react';

import "./Main.css";
import connect from "react-redux/lib/connect/connect";
import SearchHeader from "../SearchHeader/SearchHeader";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";
import CardsCategory from "../CardsCategory/CardsCategory";
import Counter from "../Counter/Counter";
import UniqueEquipments from "../UniqueEquipments/UniqueEquipments";
import Process from "../Process/Process";
import HowStart from "../HowStart/HowStart";

const start = {
    header: 'C чего начать?',
    text: 'Не нужно покупать дорогостоящее оборудования и брать в штат уникальных специалистов',
};
const process = {
    header: 'Простой и удобный процесс',
    text: 'Не нужно покупать дорогостоящее оборудования и брать в штат уникальных специалистов'
};
const counters = [
    {counter: 1500, spanText: 'оборудования', text: 'технологического и наукоёмкого'},
    {counter: 85, spanText: 'городов', text: 'по всей России'}
    ];
class Content extends Component {
    onChangeInputValue = (text) =>{
        this.props.onChangeInput(text);
    };
    onSubmit = (text) =>{
        this.props.onSubmit(text);
    };
    onChangeFilter = (text, filter) =>{
        this.props.selectFilter(text, filter);
    };
    render() {
        return (
            <main>
                <section className={'search_wrapper'}>
                    <SearchHeader header={'Технологические сервисы'}
                                  paragraph={'Заказывайте услуги прототипирования, испытаний, метрологии и биомедицины'}
                    />
                    <Search onSubmit={this.onSubmit}
                            inputValue={this.props.inputValue}
                            onChangeInputValue={this.onChangeInputValue}
                    />
                    <Filters filters={this.props.filters}
                             onChangeFilter={this.onChangeFilter}
                             city={this.props.cityFilter}
                             category={this.props.categoryFilter}
                    />
                    <UniqueEquipments header={''}
                                      text={''}
                                      cards={this.props.cards}
                                      selectCard={this.props.selectCard}
                    />
                    <Counter counters={counters}/>
                    <CardsCategory list={this.props.category} selectCard={this.props.selectCard}/>
                    <Process process={process} />
                    <HowStart start={start}/>
                </section>
            </main>
        );
    }
}
const mapStateToProps = state => ({
    inputValue: state.inputValue,
    filters: state.filtersState,
    category: state.categoryState,
    cards: state.equipmentState,
    cityFilter: state.filters.city,
    categoryFilter: state.filters.category,
});
const mapDispatchToProps = dispatch => ({
    selectFilter: (text, filter) => dispatch({type: 'ADD_FILTER', payload: [text, filter]}),
    onChangeInput: (text ) => dispatch({type: 'CHANGE_INPUT_VALUE', payload: text}),
    onSubmit: (text) => dispatch({type: 'SEARCH', payload: text}),
});
export default connect(mapStateToProps, mapDispatchToProps)(Content);