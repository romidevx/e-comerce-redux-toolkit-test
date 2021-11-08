import React from 'react';
import './Cart.css';
import ItemDescription from './ItemDescription';
import TotalDescription from './TotalDescrition';
import {Link} from 'react-router-dom';


function Cart() {

    return (
        <div className='shop-cart-container'>
            <Link to='/' style={{ textDecoration:'none',color:'#000'}}>
                <h3>&#9664; &nbsp; Continue shopping</h3>
            </Link>
            <br/>
            <br/>
            <ItemDescription />
            <TotalDescription />
        </div>
    )
}

export default Cart
