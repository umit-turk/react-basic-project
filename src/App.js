import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import YaziDetayi from './components/YaziDetayi';
import YaziListesi from './components/YaziListesi';

function App() {

  return (
    <Router>
      <div className="main_wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Route path="/" exact component={YaziListesi}></Route>
          <Route path="/posts/:id" component={YaziDetayi}></Route>
        </div>
      </div>
      </Router>
  );
}

export default App;
