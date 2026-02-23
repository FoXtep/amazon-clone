import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import {
  Card,
  Image,
  Content,
  Title,
  Price,
  RatingContainer,
  Rating,
  ReviewCount,
  AddButton,
} from './styles';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Card as={Link} to={`/product/${product.id}`}>
      <Image src={product.image} alt={product.name} />
      <Content>
        <Title>{product.name}</Title>
        <RatingContainer>
          <Rating>{'⭐'.repeat(Math.floor(product.rating))}</Rating>
          <ReviewCount>({product.reviews})</ReviewCount>
        </RatingContainer>
        <Price>${product.price.toFixed(2)}</Price>
        <AddButton onClick={handleAddToCart}>Add to Cart</AddButton>
      </Content>
    </Card>
  );
};

export default ProductCard;
