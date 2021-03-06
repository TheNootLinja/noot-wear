import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton.component';
import CartItem from '../CartItem/CartItem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './CartDropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
   <div className='cart-dropdown'>
       <div className='cart-items'>
           {
               cartItems.length ? (
               cartItems.map(cartItem => (
               <CartItem key={cartItem.id} item={cartItem} />
               ))
               ) : (
               <span className='empty-message'>Your cart is empty</span>
               )}
       </div>
       <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
   </div> 
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));