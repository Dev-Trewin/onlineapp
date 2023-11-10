import {Fragment,useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';
import '../navigation/navegation.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import { UserContext } from '../../assets/user.context';

const Navigation = () => {
    const {currentUser}=useContext(UserContext);
    
    //console.log("Current User" + currentUser);
    return (
        <Fragment>
            <div className='navigation'>
                <div className='logo-container'>
                    <Link className='nav-link' to='/'>
                       <CrwnLogo className='logo'/>
                    </Link>
                </div>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link><Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )

};

export default Navigation;
