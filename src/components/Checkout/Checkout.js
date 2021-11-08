import React from 'react';
import {Link} from 'react-router-dom';
import './checkout.css';

const Checkout = () => {
    return (
        <div className='checkout-container'>

            <h3>Thanks for shopping with us.</h3>
            
            <h2>
                <Link to ='/'>
                    &#9664; Checkout more products
                </Link>
            </h2>

        </div>
    )
}

export default Checkout
