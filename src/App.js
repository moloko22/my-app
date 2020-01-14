import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Category from "./components/Category/Category";
import './App.css';
import Cards from "./components/Cards/Cards";
import Card from "./components/Card/Card";
import Categories from "./components/Categories/Categories";

function App() {
  return (
      <section className={'app_wrapper'}>
          <div className={'app'}>
              <Header/>
              <BrowserRouter>
                  <Switch>
                      <Route path="/" exact component={Content} />
                      <Route path="/categories" exact component={Categories} />
                      <Route path='/categories/:category' component={Category}/>
                      <Route path="/categories" component={Cards} />
                      <Route path='/cards/:card' component={Card}/>
                  </Switch>
              </BrowserRouter>
              <Footer/>
          </div>
      </section>
  );
}

export default App;
