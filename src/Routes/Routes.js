import React from 'react'
import {Switch,Route} from 'react-router-dom';
//COMPONENTS
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Products from '../components/Products/Products';
import NotFound from '../components/NotFound/NotFound';
import Checkout from '../components/Checkout/Checkout';
import Cart     from '../components/Cart/';

const Routes = () => {
    return (
        <div>
            <Switch>
            <Route exact path='/'             component={Products} />
            <Route path='/productdetails/:id' component={ProductDetails} />
            <Route path='/checkout'           component={Checkout} />
            <Route path='/cart'               component={Cart} />
            <Route path='*'                   component={NotFound}/>
          </Switch>
        </div>
    )
}

export default Routes
