import React from 'react';
import './index.css';
//ROUTER
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//COMPONENTS
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import NotFound from './components/NotFound/NotFound';
import Checkout from './components/Checkout/Checkout';
import Footer   from './components/Footer/Footer';
import Header   from './components/Header/';
import Cart     from './components/Cart/';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path='/'             component={Products} />
            <Route path='/productdetails/:id' component={ProductDetails} />
            <Route path='/checkout'           component={Checkout} />
            <Route path='/cart'               component={Cart} />
            <Route path='*'                   component={NotFound}/>
          </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
