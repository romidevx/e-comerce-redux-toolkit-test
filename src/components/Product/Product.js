import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css';
// REACT REDUX
import {useSelector} from 'react-redux';


function Product({productInfo}) {

    // CART STORE
    const {cart} = useSelector(state => state.cart);

    // CHECK IF PRODUCT IS IN CART
    const isProductInCart = (itemId) => cart.some(cartItem => cartItem.id === itemId);


    return (
        
        <div className='product-container'>
                <h4 className='product-name'>{productInfo.name}</h4><br/>

                <Link to={`/productdetails/${productInfo.id}`}>
                    <img className='product-image' src={'/images/' + productInfo.image} alt=''/>
                </Link>

                <h3 className='product-price'><small>R$</small> {productInfo.price.toFixed(2)}</h3>

                <div className='product-description'>
                    <div>
                        <span>id#   <b>{productInfo.id}   </b>&nbsp;</span>
                        <span>score:<b>{productInfo.score}</b></span>
                        {
                            isProductInCart(productInfo.id) && <span className='incart-tag'>In cart</span>     
                        }
                    </div> 
                </div>

                
        </div>
    )
}

export default Product;
