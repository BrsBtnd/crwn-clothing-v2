import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import { CartIconContainer, ItemCountStyle, ShoppingIconStyle } from './CartIconStyle';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen) 
    
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconStyle />
      <ItemCountStyle>{cartCount}</ItemCountStyle>
    </CartIconContainer>
  );
};

export default CartIcon;
