import React,{useState,useEffect} from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';
// STORE
import {useDispatch,useSelector} from 'react-redux';
import { deleteProductFromCart, decreaseProductQuantity, increaseProductQuantity } from '../../store/slices/cartSlice';


const ItemDescription = () => {

    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch()
    const [deleteMessage,setDeleteMessage] = useState(false);

    const showDeleteMsg = (item_Id) => {
        dispatch(deleteProductFromCart(item_Id));
        window.scroll(0,0);
        setDeleteMessage(true);
        setTimeout( () => setDeleteMessage(false) ,2000 );
    }
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
       
        <div className='cart-items'>

            <h3 style={{textAlign:'center',color:'#8c8c8c'}}>My Shopping items list</h3><br/> 
            
            {/* MESSAGE - DELETE PRODUCT FROM CART  */}
            { deleteMessage && <h4 style={{color:'#000',textAlign:'center',background:'#bd5b5d',padding:'10px 0'}}> .. Item removed from cart .. </h4> }
            <br/><br/>

            {/* DISPLAY - HOW MANY ITEMS IN CART */}
            <div className='cart-items-titles'>
                <h5>{!cart.length ? '' : 'Subtotal'}</h5>
            </div>

            {    
                //  ** === DISPLAY ALL ITEMS FROM CART  === ** 
                !cart.length
                ? <h3 style={{textAlign:'center'}}>Oops.. your cart is empty.. !!</h3>
                : cart.map(cartItem => 
                    <div className='cart-items-list' key={cartItem.id}>

                         {/*  PRODUCT IMAGE  */}
                        <div className='cart-item-image'>
                            <Link to={`/productdetails/${cartItem.id}`}>
                                <img src={'/images/' + cartItem.image} alt="" />
                            </Link>
                        </div>

                        {/*  PRODUCT NAME, ID AND PRICE */}
                        <div className="cart-item-description">
                            
                            <div className='cart-item cart-item-name'>
                                <h5>
                                    <span>{cartItem.name}</span><br/><br/>
                                    <span># {cartItem.id}</span>
                                </h5>
                                <br/>
                                <h5><span>R$ {(cartItem.price).toFixed(2)}</span></h5>
                            </div>

                            {/*  BUTTONS INCREASE , DECREASE AND QUANTITY VALUE */}
                            <div className='cart-item cart-item-buttons'>
                                <span className='increase-button' onClick={() => dispatch(increaseProductQuantity(cartItem.id))}>&nbsp; + &nbsp;</span>
                                <span>&nbsp;&nbsp; {cartItem.quantity} &nbsp;&nbsp;</span>
                                <span className='decrease-button' onClick={() => dispatch(decreaseProductQuantity(cartItem.id))}>&nbsp; - &nbsp;</span>
                            </div>

                            {/*  DELETE BUTTON  */}
                            <div className='cart-item cart-item-delete'>
                                <h5><span onClick={() => showDeleteMsg(cartItem.id)}>X</span></h5>
                            </div>

                             {/*   SUBTOTAL    */}
                            <div className={'cart-item cart-item-totalPrice'}>
                                <h5>
                                    <span className='cart-item-subtotal-title'>SubTotal: </span>
                                    <span> R$ {(cartItem.price * cartItem.quantity).toFixed(2)}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    
                )
            }
        </div>
    )
}

export default ItemDescription;
