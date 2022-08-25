import React from 'react';
import './TotalDescription.css';
import {useSelector,useDispatch} from 'react-redux';
//import {cartTotal } from '../../store/slices/cartSlice';
import {checkOutCart} from '../../store/slices/cartSlice';
import {useHistory} from 'react-router-dom';



function TotalDescrition() {
    const {cartCount,cartTotal} = useSelector(state => state.cart);
    const dispatch = useDispatch()
    const history = useHistory();
    const formatTotal = (totalAmount) => new Intl.NumberFormat().format(totalAmount);

    const handleCheckout = () => {
        history.push('/checkout');
        setTimeout( () => dispatch(checkOutCart()) , 2000);
    }

    return (
        
        <div className={!cartCount ? 'invisible' :'total-description'}>

            <div className="total-description-inner-right">

                <div className="total-container">
                    <h4>
                        <span>Total: &nbsp;</span>
                        <span>R$ {formatTotal(cartTotal)}</span>
                    </h4>
                </div>

                <div className="checkout-button-container">
                    <button onClick={handleCheckout} style={{cursor:'pointer'}}>Checkout</button>
                </div>
            </div>

        </div>
    )
}

export default TotalDescrition
