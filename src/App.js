import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/Homepage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInUpPage from './pages/SignInUpPage/SignInUpPage.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUpPage} />
      </Switch>
    </div>
  );
}

export default App;
