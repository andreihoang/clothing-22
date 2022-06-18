import { Fragment } from "react";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation-style";

import CartIcon from "../../components/cart-icon/cart-icon";
import CatDropdown from "../../components/cart-dropdown/cart-dropdown";

import { signOutStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    dispatch(signOutStart());
  }

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
                <NavLink as='span' onClick={handleSignOut}>{' '}SIGN OUT{' '}</NavLink>
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