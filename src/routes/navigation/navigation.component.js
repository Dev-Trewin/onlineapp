import {Fragment} from 'react';
import {Outlet, Link} from 'react-router-dom';
import '../navigation/navegation.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
const Navigation = () => {

    return (
        <Fragment>
            <div className='navigation'>
                <div className='logo-container'>
                    <Link className='nav-link' to='/'>
                       <CrwnLogo className='logo'/>
                    </Link>
                </div>
                <div className='links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )

};

export default Navigation;
