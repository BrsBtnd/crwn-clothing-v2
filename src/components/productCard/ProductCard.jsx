import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';

import { ProductCardContainer, Name, Price, Footer } from './ProductCardStyle';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/CartAction';
import { selectCartItems } from '../../store/cart/CartSelector';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
    </ProductCardContainer>
  );
};

export default ProductCard;
