import React,{useEffect} from 'react';
import './ProductDetails.css';
// REACT ROUTER
import {useParams,Link} from "react-router-dom";
// REACT REDUX
import {useDispatch,useSelector} from 'react-redux';
// REDUCER ACTIONS
import {addProductToCart} from '../../store/slices/cartSlice';

function ProductDetails() {
    // CART STORE
    const {cart} = useSelector(state => state.cart);
    // PRODUCTS STORE
    const {products} = useSelector((state) => state.products);

    const { id } = useParams();
    const dispatch = useDispatch();

    // GET PRODUCT INFO
    const filteredItem = products.find(item => Number(item.id) === Number(id));
    
    // ADD PRODUCT TO CART
    const addItemToCart = () => {
        dispatch(addProductToCart({
            id:    filteredItem.id,
            name:  filteredItem.name,
            price: filteredItem.price,
            score: filteredItem.score,
            image: filteredItem.image,
            quantity: 1,
        }));
    }

    // CHECK IF PRODUCT IS IN CART
    const isProductInCart = (itemId) => cart.some(cartItem => cartItem.id === itemId);

    console.log(isProductInCart ? 'is in cart' : 'not in cart')

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return ( 

            <div className="product-details-container">

                <div className="product-image-container">
                    <img className="product-detail-image" src={'/images/' + filteredItem.image} alt="" />
                </div>

                <div className="product-info">
                    <h3 className="product-info-name">{filteredItem.name}</h3>
                    <h1 className="product-info-price">R$ {filteredItem.price.toFixed(2)}</h1>
                    <h4 className="product-info-id">Id# {filteredItem.id}</h4>
                    <h4 className="product-info-score">score: {filteredItem.score} points</h4>

                    <div className="add-cart-button">
                        {
                            isProductInCart(filteredItem.id)
                            ? <h2 style={{color:'red',padding:'5px',margin:'15px 0'}}>
                                Item added to cart<br/>
                                <Link to='/cart' style={{textDecoration:'none', color:'#000'}}>
                                    <span style={{fontSize:'18px'}}>
                                       View Cart &nbsp; &#9654;
                                    </span>
                                </Link>
                              </h2> 
                            : <button className="addToCart-btn" onClick={addItemToCart}>
                                <img src='/images/shopCart-white.png' style={{width:'23px',marginBottom:'-4px'}} alt="Cart logo" title="Ver carrinho"/>
                                &nbsp;&nbsp; Add to cart
                              </button>
                            
                        }
                    </div>

                    <div className="mais-produtos-button-container">
                        <Link to={'/'}> 
                            <button className="mais-produtos-btn">&#9664; &nbsp; Continue shopping</button>
                        </Link>    
                    </div>
                </div>

            </div>
        
    )
}

export default ProductDetails;
