import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setOrderPlaced] = useState(false);
    const history = useHistory()

    const handleProceedCheckout = () =>{
       history.push('/shipment');
    }
 
    const removeProduct = (productkey) =>{
        console.log('remove clicked',productkey);
        const newCart = cart.filter(pd =>pd.key !== productkey);
        setCart(newCart);
        removeFromDatabaseCart(productkey);
    }
   useEffect (() =>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys.map(key =>{
        const product =fakeData.find(pd =>pd.key === key);
        product.quantity = savedCart[key];
        return product;
    });
        setCart(cartProducts);
     },[]);
     let thankyou;
     if(orderPlaced) {
         thankyou = <img src={happyImage} alt=""/>
     }
    return (
        <div className="shop-container">
           <div className="product-container">
           {
                
                cart.map(pd => <ReviewItem 
                    removeProduct={removeProduct}
                    key ={pd.key}
                    product ={pd}></ReviewItem>)
            }
            {
                thankyou
            }
           </div>
           <div className="cart-container">
               <Cart cart={cart}>
               <button onClick ={handleProceedCheckout}>Proceed checkout</button>
               </Cart>
           </div>
        </div>
    );
};

export default Review;