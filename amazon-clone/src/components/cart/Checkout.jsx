import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useOrders } from '../../context/OrdersContext';
import { useAuth } from '../../context/AuthContext';
import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutContent,
  CheckoutForm,
  FormSection,
  FormGroup,
  FormRow,
  OrderSummary,
  OrderTitle,
  OrderItem,
  OrderTotal,
  PlaceOrderButton,
} from './styles';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { addOrder } = useOrders();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.address || !formData.city || !formData.cardNumber) {
      alert('Please fill in all required fields');
      return;
    }

    // Create order object
    const order = {
      items: [...cartItems],
      subtotal: getCartTotal(),
      tax: getCartTotal() * 0.1,
      total: getCartTotal() * 1.1,
      shippingAddress: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
      },
      userEmail: user?.email,
    };

    // Save order
    const newOrder = addOrder(order);

    // Clear cart and redirect to confirmation
    clearCart();
    navigate('/order-confirmation', { 
      state: { 
        orderNumber: newOrder.id,
        total: order.total.toFixed(2),
      }
    });
  };

  if (cartItems.length === 0) {
    return (
      <CheckoutContainer>
        <CheckoutTitle>Checkout</CheckoutTitle>
        <p>Your cart is empty. <a href="/">Continue shopping</a></p>
      </CheckoutContainer>
    );
  }

  const tax = getCartTotal() * 0.1;
  const total = getCartTotal() + tax;

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <CheckoutContent>
        <CheckoutForm onSubmit={handleSubmit}>
          {/* Shipping Information */}
          <FormSection>
            <h2>Shipping Address</h2>
            <FormRow>
              <FormGroup>
                <label htmlFor="firstName">First Name *</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="lastName">Last Name *</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="address">Street Address *</label>
              <input
                id="address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <label htmlFor="city">City *</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="state">State/Province</label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <label htmlFor="zipCode">ZIP/Postal Code</label>
              <input
                id="zipCode"
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </FormGroup>
          </FormSection>

          {/* Payment Information */}
          <FormSection>
            <h2>Payment Information</h2>
            <FormGroup>
              <label htmlFor="cardName">Cardholder Name *</label>
              <input
                id="cardName"
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="cardNumber">Card Number *</label>
              <input
                id="cardNumber"
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  id="expiryDate"
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  type="text"
                  name="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormRow>
          </FormSection>

          <PlaceOrderButton type="submit">Place Order</PlaceOrderButton>
        </CheckoutForm>

        <OrderSummary>
          <OrderTitle>Order Summary</OrderTitle>
          {cartItems.map(item => (
            <OrderItem key={item.id}>
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </OrderItem>
          ))}
          <OrderItem>
            <span>Subtotal</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </OrderItem>
          <OrderItem>
            <span>Shipping</span>
            <span>Free</span>
          </OrderItem>
          <OrderItem>
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </OrderItem>
          <OrderTotal>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </OrderTotal>
        </OrderSummary>
      </CheckoutContent>
    </CheckoutContainer>
  );
};

export default Checkout;
