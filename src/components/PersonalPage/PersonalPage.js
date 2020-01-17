import React, {Component} from 'react';
import OrderCard from "../OrderCard/OrderCard";
import connect from "react-redux/lib/connect/connect";

import './PersonalPage.css';

class PersonalPage extends Component {
    renderOrders(array){
        return array.map(elem => {
            console.log(elem);
            return <OrderCard item={elem} key={elem.id}/>
        })
    }
    render() {
        return (
            <section className={'personal_section'}>
                <div className={'personal_header'}>
                    <h3>Личный кабинет</h3>
                    <h4>Ваши заявки</h4>
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
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalPage);