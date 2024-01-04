import {Fragment,useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {NavigationContainer
  ,NavLink
  ,NavLinks
  ,LogoContainer
  } from './navegation.styles';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

const Navigation = () => {
    const {currentUser}=useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);



    return (
        <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}{/* So, the entire expression means "if isCartOpen is true, render the CartDropdown component; otherwise, do nothing." It's a concise way of conditionally rendering components in React based on the value of a boolean variable. */}
      </NavigationContainer>
      <Outlet />
    </Fragment>
    )

};

export default Navigation;
