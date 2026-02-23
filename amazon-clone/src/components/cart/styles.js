import styled from 'styled-components';

// Cart Styles
export const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const CartTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CartItems = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
`;

export const CartItemEmpty = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;

  h2 {
    margin-bottom: 10px;
    color: #333;
  }

  p {
    margin-bottom: 20px;
  }
`;

export const CartItemRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 100px 100px 50px;
  gap: 15px;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr 50px;
    gap: 10px;
  }
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    margin: 0;
    font-size: 16px;
    color: #333;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }
`;

export const ItemPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #b12704;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ItemTotal = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #b12704;
  text-align: center;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  select {
    padding: 4px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #0066c0;
  cursor: pointer;
  font-size: 12px;
  padding: 0;
  text-decoration: underline;

  &:hover {
    color: #c60;
  }
`;

export const CartSummary = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  height: fit-content;
  position: sticky;
  top: 80px;
`;

export const SummaryTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 15px 0;
  color: #333;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;

  &.total {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    border-top: 1px solid #ddd;
    padding-top: 10px;
    margin-top: 10px;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #ff9900 0%, #f39c12 100%);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 15px;
  transition: background 0.2s;

  &:hover {
    background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const ContinueShoppingButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #ddd;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;

  &:hover {
    background: #ccc;
  }
`;

// Checkout Styles
export const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const CheckoutTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

export const CheckoutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CheckoutForm = styled.form`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
`;

export const FormSection = styled.div`
  margin-bottom: 30px;

  h2 {
    font-size: 18px;
    margin: 0 0 15px 0;
    color: #333;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
    font-size: 14px;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: #ff9900;
      box-shadow: 0 0 0 2px rgba(255, 153, 0, 0.1);
    }
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const OrderSummary = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  height: fit-content;
  position: sticky;
  top: 80px;
`;

export const OrderTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 15px 0;
  color: #333;
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;

  &:last-child {
    border-bottom: none;
  }
`;

export const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-top: 1px solid #ddd;
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #b12704;
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #ff9900 0%, #f39c12 100%);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 15px;
  transition: background 0.2s;

  &:hover {
    background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

// Order Confirmation Styles
export const ConfirmationContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
`;

export const ConfirmationIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
`;

export const ConfirmationMessage = styled.div`
  h1 {
    font-size: 28px;
    margin: 0 0 10px 0;
    color: #2e7d32;
  }

  p {
    font-size: 16px;
    color: #666;
    margin: 10px 0;
  }
`;

export const OrderNumber = styled.div`
  background: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  margin: 20px 0;
  font-size: 14px;

  strong {
    color: #333;
  }
`;

export const ContinueButton = styled.button`
  padding: 12px 30px;
  background: linear-gradient(135deg, #ff9900 0%, #f39c12 100%);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.2s;

  &:hover {
    background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  }
`;
