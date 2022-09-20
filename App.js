
// import data; 
import stores from './data/stores';
import items from './data/items';

// import styles/images
import './App.css';
import { GiFruitBowl } from 'react-icons/gi';

// import components
import Navigation from './components/nav.js';

// import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import pages
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import StoresPage from './pages/StoresPage';
import CurrDate from './components/date.js';


function App() {  

  return (
      <div className="App">
    
      <Router>
        <header>
          <GiFruitBowl className="App-logo" />
          {/*<img src={GiFruitBowl} className="App-logo" alt="logo" />*/}
          <h1>&hearts; Motola's Online Grocery Store &hearts; </h1>
          <p>An oasis of fresh, organic groceries at your convenience.</p>
          <br></br>
          
          </header>
         
          <Navigation />
          <main>
            
            <article className="App-article">
              {/*<Route path="/" exact><HomePage /></Route>*/} 
              <Route path="/(|index.html)" exact><HomePage /></Route>
              <Route path="/stores"><StoresPage stores={stores} /></Route>
              <Route path="/order"><OrderPage items={items} /></Route>
              
              
            </article>
          </main>
          <br></br>
          <footer>
            <CurrDate />
          </footer>
      </Router>
    </div>
  );
}

export default App;
