import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/Homepage.component';
import ShopPage from './pages/ShopPage/ShopPage.component.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
