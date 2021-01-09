import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon.component.js';
import CartDropdown from '../CartDropdown/CartDropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.styles.scss';
import CustomButton from '../CustomButton/CustomButton.component';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {   
            hidden ? null :
            <CartDropdown />
        }
    </div>
)

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden,
})

export default connect(mapStateToProps)(Header);