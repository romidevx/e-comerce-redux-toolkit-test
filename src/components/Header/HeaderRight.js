import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {useSelector} from 'react-redux';
import { cartCount } from '../../store/slices/cartSlice';

function HeaderRight() {
    const count = useSelector(cartCount);

    return (
        <div className="header-right-container">
            <Link to='/cart'>
                <img src='/images/shopCart.png' alt="Cart logo" title="Ver carrinho"/>
            </Link>
            <span className='shop-icon'>{count}</span>  
        </div>
    )
}

export default HeaderRight;
