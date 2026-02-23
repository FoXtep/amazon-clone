import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../config/products';
import {
  DetailContainer,
  ImageSection,
  DetailImage,
  InfoSection,
  DetailTitle,
  DetailRating,
  DetailPrice,
  DetailDescription,
  QuantityControl,
  DetailAddButton,
  BackButton,
  StockStatus,
} from './styles';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <DetailContainer>
        <div>
          <h2>Product not found</h2>
          <BackButton onClick={() => navigate('/')}>Back to Products</BackButton>
        </div>
      </DetailContainer>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <DetailContainer>
      <ImageSection>
        <DetailImage src={product.image} alt={product.name} />
      </ImageSection>

      <InfoSection>
        <DetailTitle>{product.name}</DetailTitle>

        <DetailRating>
          <span>{'⭐'.repeat(Math.floor(product.rating))}</span>
          <span>{product.rating} out of 5</span>
          <span>({product.reviews} reviews)</span>
        </DetailRating>

        <DetailPrice>${product.price.toFixed(2)}</DetailPrice>

        <StockStatus inStock={product.inStock}>
          {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
        </StockStatus>

        <DetailDescription>{product.description}</DetailDescription>

        <QuantityControl>
          <label htmlFor="quantity">Quantity:</label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </QuantityControl>

        <DetailAddButton onClick={handleAddToCart} disabled={!product.inStock}>
          Add to Cart
        </DetailAddButton>

        <BackButton onClick={() => navigate('/')}>Continue Shopping</BackButton>
      </InfoSection>
    </DetailContainer>
  );
};

export default ProductDetail;
