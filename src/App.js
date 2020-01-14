import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
      <section className={'app_wrapper'}>
          <div className={'app'}>
              <Header/>
              <Content/>
              <Footer/>
          </div>
      </section>
  );
}

export default App;
