import React, {Component} from 'react';

import connect from "react-redux/lib/connect/connect";
import SearchHeader from "../SearchHeader/SearchHeader";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";
import CardsCategory from "../CardsCategory/CardsCategory";
import Counter from "../Counter/Counter";
import UniqueEquipments from "../UniqueEquipments/UniqueEquipments";
import "./Main.css";

const counters = [
    {counter: 1500, text: 'Единиц технологического оборудования'},
    {counter: 85, text: 'Аккредитованных поставщиков'}
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
                    <CardsCategory list={this.props.category} selectCard={this.props.selectCard}/>
                    <Counter counters={counters}/>
                    <UniqueEquipments header={''}
                                      text={''}
                                      cards={this.props.cards}
                                      selectCard={this.props.selectCard}
                    />
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