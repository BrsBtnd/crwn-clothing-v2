import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/CartSelector';

import { setIsCartOpen } from '../../store/cart/CartAction';

import {
  CartIconContainer,
  ItemCountStyle,
  ShoppingIconStyle,
} from './CartIconStyle';

const CartIcon = () => {
  const dispatch = useDispatch();
  
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconStyle />
      <ItemCountStyle>{cartCount}</ItemCountStyle>
    </CartIconContainer>
  );
};

export default CartIcon;
