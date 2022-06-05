import './checkout.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

const Checkout = () => {

   
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Desciption</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            
                {cartItems.map((cartItem) => {
                    return (
                       <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })}
            <span className='total'>Total: {total}</span>
        </div>
    )
}

export default Checkout;