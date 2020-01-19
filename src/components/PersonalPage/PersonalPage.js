import React, {Component} from 'react';
import OrderCard from "../OrderCard/OrderCard";
import connect from "react-redux/lib/connect/connect";

import './PersonalPage.css';

class PersonalPage extends Component {
    renderOrders(array){
        return array.map(elem => {
            return <OrderCard item={elem} key={elem.id}/>
        })
    }
    render() {
        return (
            <section className={'personal_section'}>
                <div className={'personal_header'}>
                    <h3>Личный кабинет</h3>
                    <h4>{this.props.orders.length ? 'Заявки' : 'Заявок нет'}</h4>
                </div>
                <div className={'personal_orders'}>
                    {this.renderOrders(this.props.orders)}
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => ({
    orders: state.orders
});

export default connect(mapStateToProps)(PersonalPage);