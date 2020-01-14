import React, {Component} from 'react';
import "./Main.css";
import SearchHeader from "../SearchHeader/SearchHeader";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";
import CardsCategory from "../CardsCategory/CardsCategory";
import Counter from "../Counter/Counter";
import UniqueEquipments from "../UniqueEquipments/UniqueEquipments";

const filters = {
    city: ['Фильт по городу','First', 'Second', 'Third'],
    category: ['Фильт по типу оборудования', 'First', 'Second', 'Third'],
};
const array = [
    {name: 'Прототипирование', titles:['1', '2', '3']},
    {name: 'Биомедицина', titles:['4', '5', '6']},
    {name: 'Метрология', titles:['9', '8', '7']},
];
const counters = [
    {counter: 1500, text: 'Единиц технологического оборудования'},
    {counter: 85, text: 'Аккредитованных поставщиков'}
    ];
const cards = [
    {header: 'header', text: 'text', img: 'link'},
    {header: 'header1', text: 'text', img: 'link'},
    {header: 'header2', text: 'text', img: 'link'},
    {header: 'header3', text: 'text', img: 'link'}
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
                    <Filters filters={filters}/>
                    <CardsCategory list={array}/>
                    <Counter counters={counters}/>
                    <UniqueEquipments header={''}
                                      text={''}
                                      cards={cards}
                    />
                </section>
            </main>
        );
    }
}

export default Content;