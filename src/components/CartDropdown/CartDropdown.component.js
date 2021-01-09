import CustomButton from '../CustomButton/CustomButton.component';

import './CartDropdown.styles.scss';

const CartDropdown = () => (
   <div className='cart-dropdown'>
       <div className='cart-item'/>
       <CustomButton>GO TO CHECKOUT</CustomButton>
   </div> 
)

export default CartDropdown;