import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import {
  CartContainer,
  CartTitle,
  CartContent,
  CartItems,
  CartItemEmpty,
  CartItemRow,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemTotal,
  QuantityControl,
  RemoveButton,
  CartSummary,
  SummaryTitle,
  SummaryRow,
  CheckoutButton,
  ContinueShoppingButton,
} from './styles';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <CartTitle>Shopping Cart</CartTitle>
        <CartItems>
          <CartItemEmpty>
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
            <ContinueShoppingButton onClick={() => navigate('/')}>
              Continue Shopping
            </ContinueShoppingButton>
          </CartItemEmpty>
        </CartItems>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle>Shopping Cart</CartTitle>
      <CartContent>
        <CartItems>
          {cartItems.map(item => (
            <CartItemRow key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemInfo>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)} each</p>
              </ItemInfo>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
              <QuantityControl>
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </QuantityControl>
              <ItemTotal>${(item.price * item.quantity).toFixed(2)}</ItemTotal>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                Remove
              </RemoveButton>
            </CartItemRow>
          ))}
        </CartItems>

        <CartSummary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryRow>
            <span>Subtotal:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </SummaryRow>
          <SummaryRow>
            <span>Shipping:</span>
            <span>Free</span>
          </SummaryRow>
          <SummaryRow>
            <span>Tax:</span>
            <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
          </SummaryRow>
          <SummaryRow className="total">
            <span>Total:</span>
            <span>${(getCartTotal() * 1.1).toFixed(2)}</span>
          </SummaryRow>
          <CheckoutButton onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </CheckoutButton>
          <ContinueShoppingButton onClick={() => navigate('/')}>
            Continue Shopping
          </ContinueShoppingButton>
        </CartSummary>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
