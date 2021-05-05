import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"

import YaziDetayi from './components/YaziDetayi';
import YaziEkle from './components/YaziEkle';
import YaziListesi from './components/YaziListesi';

function App() {

  return (
    <Router>
      <div className="main_wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Route path="/" exact component={YaziListesi}></Route>
          <Route path="/posts/:id" component={YaziDetayi}></Route>
          <Route path="/yaziekle" component={YaziEkle} />
        </div>
      </div>
      </Router>
  );
}

export default App;
