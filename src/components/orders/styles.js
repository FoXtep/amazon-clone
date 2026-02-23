import styled from 'styled-components';

export const OrdersContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

export const OrdersTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OrderCard = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #f8f8f8;
  border-bottom: 1px solid #ddd;
`;

export const OrderId = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

export const OrderDate = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;

export const OrderStatus = styled.div`
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  background: ${props => {
    switch (props.status) {
      case 'Delivered':
        return '#e8f5e9';
      case 'Shipped':
        return '#e3f2fd';
      case 'Processing':
        return '#fff3e0';
      default:
        return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'Delivered':
        return '#2e7d32';
      case 'Shipped':
        return '#1565c0';
      case 'Processing':
        return '#e65100';
      default:
        return '#666';
    }
  }};
`;

export const OrderItems = styled.div`
  padding: 20px;
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

export const ItemQuantity = styled.div`
  font-size: 14px;
  color: #666;
`;

export const ItemPrice = styled.div`
  font-weight: 600;
  color: #b12704;
  font-size: 16px;
`;

export const OrderFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 20px;
  background: #f8f8f8;
  border-top: 1px solid #ddd;
`;

export const OrderTotal = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #b12704;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;

  h2 {
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    margin-bottom: 20px;
  }
`;

export const ShopButton = styled.button`
  padding: 12px 30px;
  background: linear-gradient(135deg, #ff9900 0%, #f39c12 100%);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  }
`;