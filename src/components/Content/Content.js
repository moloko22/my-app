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
    filterCategory = (value, category) => {
        console.log(value);
        console.log(category);
        this.props.filterByCategory(value, category)
    };
    onChangeInputValue = (text) =>{
        this.props.onChangeInput(text);
    };
    search = () =>{
        const text = this.props.inputValue;
        const city = this.props.cityFilter;
        const category = this.props.categoryFilter;
        const cards = this.props.cards;
        this.props.searchRequest( text, city, category, cards );
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
                    <Search inputValue={this.props.inputValue}
                            onChangeInputValue={this.onChangeInputValue}
                            sendRequest={this.search}
                    />
                    <Filters filters={this.props.filters}
                             onChangeFilter={this.onChangeFilter}
                    />
                    <UniqueEquipments header={''}
                                      text={''}
                                      cards={this.props.cards}
                                      selectCard={this.props.selectCard}
                    />
                    <Counter counters={counters}/>
                    <CardsCategory list={this.props.category}
                                   filterCategory={this.filterCategory}
                                   selectCard={this.props.selectCard}/>
                    <Process process={process} />
                    <HowStart start={start}
                              sendRequest={this.search}
                    />
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
    cityFilter: state.filterSearch.city,
    categoryFilter: state.filterSearch.category,
});
const mapDispatchToProps = dispatch => ({
    selectFilter: (value, category) => dispatch({type: 'ADD_FILTER', payload: {text: value, category: category}}),
    onChangeInput: (text) => dispatch({type: 'CHANGE_INPUT_VALUE', payload: text}),
    searchRequest: (text, city, category, cards) => dispatch({type: 'FILTER', payload: { text: text, city:city, category:category, cards:cards}}),
    filterByCategory: (value, category) => dispatch({type: 'FILTER_BY_CATEGORY', payload: {text: value, category: category}}),
});
export default connect(mapStateToProps, mapDispatchToProps)(Content);