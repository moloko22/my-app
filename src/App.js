import React, { Component }from 'react';

import Provider from "react-redux/lib/components/Provider";
import store from '../src/store/store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import SearchPage from "./components/SearchPage/SearchPage";
import Card from "./components/Card/Card";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {},
        }
    }
    selectCard = (name, elem) =>{
        this.setState({
            card: elem,
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
                                <Route path={'/card/'} component={() => <Card card={this.state.card}/>}/>
                                <Route path={"/search"} exact component={() => <SearchPage selectCard={this.selectCard}/>}/>
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