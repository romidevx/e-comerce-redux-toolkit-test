import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css';

function Product({productInfo}) {

    return (
        <div className='product-container'>
                <h4 className='product-name'>{productInfo.name}</h4><br/>

                <Link to={`/productdetails/${productInfo.id}`}>
                    <img className='product-image' src={'/images/' + productInfo.image} alt=''/>
                </Link>

                <h3 className='product-price'><small>R$</small> {productInfo.price.toFixed(2)}</h3>

                <div className='product-description'>
                    <span>id#   <b>{productInfo.id}   </b></span>
                    <span>score:<b>{productInfo.score}</b></span>
                </div>
        </div>
    )
}

export default Product;
