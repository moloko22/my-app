import React, { Component }from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Category from "./components/Category/Category";
import './App.css';
import Cards from "./components/Cards/Cards";
import Card from "./components/Card/Card";
import Categories from "./components/Categories/Categories";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {},
        }
    }
    selectCard = (elem) =>{
        this.setState({
            card: elem,
        })
    }
    render() {
        return (
            <section className={'app_wrapper'}>
                <div className={'app'}>
                    <Header/>
                    <BrowserRouter>
                        <Switch>
                            <Route path={"/"} exact component={() => <Content selectCard={this.selectCard} />}/>
                            <Route path={"/categories"} exact component={Categories} />
                            <Route path={'/categories/:category'}  component={Category}/>
                            <Route path={"/categories"} exact  component={Cards} />
                            <Route path={'/card/'} component={() => <Card card={this.state.card}/>}/>
                        </Switch>
                    </BrowserRouter>
                    <Footer/>
                </div>
            </section>
        );
    }
}
export default App;