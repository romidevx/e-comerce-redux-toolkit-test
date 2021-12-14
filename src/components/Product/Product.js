import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css';
// REACT REDUX
import {useDispatch,useSelector} from 'react-redux';


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
                    {
                        isProductInCart(productInfo.id) 
                        ?  <h3 style={{ backgroundColor:'#ffcc00',color:'#000',padding:'7px 10px'}}>Product added to shop cart</h3>     
                        : <div>
                            <span>id#   <b>{productInfo.id}   </b></span>
                            <span>score:<b>{productInfo.score}</b></span>
                          </div> 

                    }
                    
                </div>
        </div>
    )
}

export default Product;
