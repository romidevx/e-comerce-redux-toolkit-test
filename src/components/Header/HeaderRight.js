import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {useSelector} from 'react-redux';
//import { cartCount } from '../../store/slices/cartSlice';

function HeaderRight() {
    const {cartCount} = useSelector(state => state.cart);

    //console.log(cartCount)
    return (
        <div className="header-right-container">
            <Link to='/cart'>
                <img src='/images/shopCart.png' alt="Cart logo" title="Ver carrinho"/>
            </Link>
            <span className='shop-icon'>{cartCount === null ? '0' : cartCount}</span>  
        </div>
    )
}

export default HeaderRight;
