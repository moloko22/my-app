import React, {Component} from 'react';
import { Input } from 'antd';
import "./Main.css";

const filters = {
    city: ['Фильт по городу','First', 'Second', 'Third'],
    category: ['Фильт по типу оборудования', 'First', 'Second', 'Third'],
};
class Content extends Component {
    render() {
        return (
            <main>
                <section className={'search_wrapper'}>
                    <div className={'search_header'}>
                        <h1>Технологические сервисы</h1>
                        <p>Заказывайте услуги прототипирования, испытаний, метрологии и биомедицины</p>
                    </div>
                    <div className={'search'}>
                        <form>
                            <Input name={'search'}
                                   placeholder={'Поиск по оборудованию'} />
                                   <button type={'submit'}>Найти</button>
                        </form>
                    </div>
                    <div className={'filters'}>
                        <div className={"filter_by_citys"}>
                            <select name="citys">
                                {filters.city.map((city, i) => (
                                    <option key={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        <div className={"filter_type_of_equipment"}>
                            <select name="citys">
                                {filters.category.map((category, i) => (
                                    <option key={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <section className={'cards_category'}>
                        <div className={'card'}>
                            <h2>Прототипирование</h2>
                            <ul>
                                <li>Somethink1</li>
                                <li>Somethink2</li>
                                <li>Somethink3</li>
                            </ul>
                        </div>
                        <div className={'card'}>
                            <h2>Биомедицина</h2>
                            <ul>
                                <li>Somethink1</li>
                                <li>Somethink2</li>
                                <li>Somethink3</li>
                            </ul>
                        </div>
                        <div className={'card'}>
                            <h2>Метрология</h2>
                            <ul>
                                <li>Somethink1</li>
                                <li>Somethink2</li>
                                <li>Somethink3</li>
                            </ul>
                        </div>
                        <div className={'card'}>
                            <h2>Испытания</h2>
                            <ul>
                                <li>Somethink1</li>
                                <li>Somethink2</li>
                                <li>Somethink3</li>
                            </ul>
                        </div>
                    </section>
                    <section className={'counter'}>
                        <div>
                            <h3>1500+</h3>
                            <p>Единиц технологического оборудования</p>
                        </div>
                        <div>
                            <h3>85+</h3>
                            <p>Аккредитованных поставщиков</p>
                        </div>
                    </section>
                    <section className={"unique_equipments"}>
                        <div className={'unique_info'}>
                            <h3>Уникальное оборудование</h3>
                            <p>Не нужно покупать дорогостоящее оборудование и брать в штат уникальных специалистов.</p>
                        </div>
                        <div className={'unique_cards'}>
                            <div className={'unique_card'}>
                                <h3>Header</h3>
                                <p>Some text about this unique cards...</p>
                                <img src="#" alt="little_logo"/>
                            </div>
                            <div className={'unique_card'}>
                                <h3>Header2</h3>
                                <p>Some text about this unique cards...</p>
                                <img src="#" alt="little_logo"/>
                            </div>
                            <div className={'unique_card'}>
                                <h3>Header3</h3>
                                <p>Some text about this unique cards...</p>
                                <img src="#" alt="little_logo"/>
                            </div>
                            <div className={'unique_card'}>
                                <h3>Header4</h3>
                                <p>Some text about this unique cards...</p>
                                <img src="#" alt="little_logo"/>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        );
    }
}

export default Content;