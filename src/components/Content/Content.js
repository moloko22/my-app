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
    render() {
        return (
            <main>
                <section className={'search_wrapper'}>
                    <SearchHeader header={'Технологические сервисы'}
                                  paragraph={'Заказывайте услуги прототипирования, испытаний, метрологии и биомедицины'}
                    />
                    <Search />
                    <Filters filters={this.props.filters}/>
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
    filters: state.filters,
    category: state.category,
    cards: state.equipment,

});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(Content);