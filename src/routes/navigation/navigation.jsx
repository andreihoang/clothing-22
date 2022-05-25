import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils"; 
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation-style";
import CartIcon from "../../components/cart-icon/cart-icon";
import CatDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
        <LogoContainer to='/'>
            <CrwnLogo className="logo" />
        </LogoContainer>
          <NavLinks>
            <NavLink to='/shop' >
                SHOP
            </NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={signOutUser}>{' '}SIGN OUT{' '}</NavLink>
              ) : (
                <NavLink to='/auth' >
                SIGN IN
                </NavLink>
              )
            }
            <CartIcon />
            
          </NavLinks>
          {isCartOpen && <CatDropdown />}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

export default Navigation;