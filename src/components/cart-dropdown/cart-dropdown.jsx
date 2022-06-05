import Button from '../button/button'
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useDispatch } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CatDropdown = () => {
    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems);
    const isCartOpen = useSelector(selectIsCartOpen);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>
            {
                cartItems.length ? cartItems.map(item => <CartItem key={item.id} cartItem={item}/>) : <span>Your cart is empty</span>
            }
            </div>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </div>
    )
}

export default CatDropdown;