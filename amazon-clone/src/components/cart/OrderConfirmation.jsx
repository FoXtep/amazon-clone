import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ConfirmationContainer,
  ConfirmationIcon,
  ConfirmationMessage,
  OrderNumber,
  ContinueButton,
} from './styles';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderNumber = location.state?.orderNumber || `AMZ-${Date.now()}`;
  const total = location.state?.total || '0.00';

  return (
    <ConfirmationContainer>
      <ConfirmationIcon>✓</ConfirmationIcon>
      <ConfirmationMessage>
        <h1>Order Confirmed!</h1>
        <p>Thank you for your purchase.</p>
        <p>Your order has been placed successfully.</p>
      </ConfirmationMessage>
      <OrderNumber>
        <strong>Order Number:</strong> {orderNumber}
        <br />
        <strong>Total Amount:</strong> ${total}
      </OrderNumber>
      <p style={{ color: '#666', fontSize: '14px' }}>
        A confirmation email has been sent to your registered email address.
      </p>
      <ContinueButton onClick={() => navigate('/')}>
        Continue Shopping
      </ContinueButton>
    </ConfirmationContainer>
  );
};

export default OrderConfirmation;
