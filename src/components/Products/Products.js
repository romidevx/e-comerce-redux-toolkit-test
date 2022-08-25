import React from 'react';
// REDUX
import { useSelector } from 'react-redux';
import './Products.css';
// COMPONENTS
import Product from '../Product/Product';
import Filters from '../Filters/'

function Products() {    

    // GET PRODUCTS FROM STORE
    const {products} = useSelector(state => state.products);

    return (
        <div className="main">
            <Filters/>

            <div className="products-container">
                {
                    !products.length 
                    ? <h3>Oops...não tem produtos</h3>
                    : products.map( productItem => 
                        <Product key={productItem.id} productInfo={productItem}/>
                      )
                }
            </div>

        </div>
    )
}

export default Products;
