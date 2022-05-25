import Button from '../button/button'
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

const CatDropdown = () => {

    const {cartItems, setIsCartOpen, isCartOpen} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
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