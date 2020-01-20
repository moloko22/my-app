import React, { Component }from 'react';

import history from "./history";
import Provider from "react-redux/lib/components/Provider";
import store from '../src/store/store'
import { Router, Switch, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import SearchPage from "./components/SearchPage/SearchPage";
import './App.css';
import PersonalPage from "./components/PersonalPage/PersonalPage";
import Card from "./components/Card/Card";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {},
        }
    }
    clearOrderList(){
        store.dispatch({type: 'CLEAR_ORDER_LIST'})
    }
    orderRequest = (obj) =>{
        store.dispatch({type: 'ORDER_REQUEST', payload: obj});
        store.dispatch({type: 'CLEAR_FILTER_TO_DEFAULT'});
        this.changeHistory('/');
        window.scrollTo(0, 0)
    };
    selectCard = (name, elem) =>{
        this.setState({
            card: elem,
        })
    };
    changeHistory = (value) =>{
        store.dispatch({type: 'CLEAR_FILTER_TO_DEFAULT'});
        history.push(value);
        window.scrollTo(0, 0)
    };
    render() {
        return (
            <Provider store={store}>
                <section className={'app_wrapper'}>
                    <div className={'app'}>
                        <Router history={history}>
                            <Header changeHistory={this.changeHistory} />
                            <Switch>
                                <Route path={"/"} exact component={() => <Content selectCard={this.selectCard}
                                                                                  changeHistory={this.changeHistory}
                                />}/>
                                <Route path={'/card/'} component={() => <Card card={this.state.card}
                                                                              orderRequest={this.orderRequest}
                                                                              changeHistory={this.changeHistory}
                                />}/>
                                <Route path={"/search"} exact component={() => <SearchPage selectCard={this.selectCard}
                                                                                           changeHistory={this.changeHistory}
                                />}/>
                                <Route path={"/account"} exact component={() => <PersonalPage changeHistory={this.changeHistory} />}/>
                            </Switch>
                            <Footer clearOrderList={this.clearOrderList}/>
                        </Router>
                    </div>
                </section>
            </Provider>
        );
    }
}
export default App;