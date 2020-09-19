import React from 'react';

import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/about' component={About}/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
