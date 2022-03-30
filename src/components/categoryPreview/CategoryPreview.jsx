import { Link } from 'react-router-dom';
import ProductCard from '../productCard/ProductCard';

import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewStyle,
} from './CategoryPreviewStyle';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title}>
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <CategoryPreviewStyle>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewStyle>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
