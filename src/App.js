import React, { Component }from 'react';

import Provider from "react-redux/lib/components/Provider";
import store from '../src/store/store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Category from "./components/Category/Category";
import './App.css';
import Card from "./components/Card/Card";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {},
            category: {},
        }
    }
    selectCard = (name, elem) =>{
        this.setState({
            [name]: elem,
        })
    };
    render() {
        return (
            <Provider store={store}>
                <section className={'app_wrapper'}>
                    <div className={'app'}>
                        <Header/>
                        <BrowserRouter>
                            <Switch>
                                <Route path={"/"} exact component={() => <Content selectCard={this.selectCard} />}/>
                                <Route path={'/category/'}  component={() => <Category category={this.state.category}/>}/>
                                <Route path={'/card/'} component={() => <Card card={this.state.card}/>}/>
                            </Switch>
                        </BrowserRouter>
                        <Footer/>
                    </div>
                </section>
            </Provider>
        );
    }
}
export default App;