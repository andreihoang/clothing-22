 
import CART_ACTION_TYPES  from "./cart.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) => {
    return {
        type: CART_ACTION_TYPES.SET_IS_CART_OPEN, 
        payload: boolean
    }
    // createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
}

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems constains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id);

    // if found -> quantity++
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem)
    }
    

    // return newarray with modifiled cartItems/ new cart items
    return [...cartItems, {...productToAdd, quantity: 1}];
} 

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove;
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id);
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => 
            {return cartItem.id !== cartItemToRemove.id}
        )
    }
    // return back cartItems with matching cart item with reduced quantity
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem)
    }
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)};


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}