import React, {Component} from 'react';


import SearchHeader from "../SearchHeader/SearchHeader";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";
import CardsCategory from "../CardsCategory/CardsCategory";
import Counter from "../Counter/Counter";
import UniqueEquipments from "../UniqueEquipments/UniqueEquipments";
import "./Main.css";

const filters = {
    city: ['Все города','Москва', 'Одесса', 'Сочи'],
    category: ['Все категории', 'First', 'Second', 'Third'],
};
const array = [
    {name: 'Прототипирование', titles:['Бесконтактная обработка', 'Точная механобработка', 'Доступ в Hardware Hackspace']},
    {name: 'Биомедицина', titles:['Доступ к оборудованию SkBioLab', 'Доклинические исследования', 'Клинические исследования']},
    {name: 'Метрология', titles:['Линейно-угловые измерения, формы, шерховатости', 'Химические исследования', 'Квантовая оптика']},
    {name: 'Испытания', titles:['Электрохимичиские испытания', 'Микробиологические испытания', 'Мониторинг "чистых производственных помещений"']}
];
const counters = [
    {counter: 1500, text: 'Единиц технологического оборудования'},
    {counter: 85, text: 'Аккредитованных поставщиков'}
    ];
const cards = [
    {header: 'Fortus 900MC - промышленный 3D принтер c самой большой рабочей зоной', text: 'Рабочая зона - 914х609х914 мм', img: '#'},
    {header: 'Titan Themis - просвечивающий электронный микроскоп', text: 'Ускоряющее напряжение - 300кв', img: '#'},
    {header: 'Oxford System 100 Pro - кластерная установка с камерой осаждения атомных слоев', text: 'text', img: 'link'},
    {header: 'V780 - вибрационный стенд ', text: 'Проведение ударных и вибрационных испытаний изделий весом до 100км ', img: 'link'}
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