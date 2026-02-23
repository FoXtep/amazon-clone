import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../../context/OrdersContext';
import { useAuth } from '../../context/AuthContext';
import {
  OrdersContainer,
  OrdersTitle,
  OrderList,
  OrderCard,
  OrderHeader,
  OrderId,
  OrderDate,
  OrderStatus,
  OrderItems,
  OrderItem,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemQuantity,
  ItemPrice,
  OrderFooter,
  OrderTotal,
  EmptyState,
  ShopButton,
} from './styles';

const Orders = () => {
  const { orders } = useOrders();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Filter orders for current user
  const userOrders = orders.filter(order => order.userEmail === user?.email);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (userOrders.length === 0) {
    return (
      <OrdersContainer>
        <OrdersTitle>My Orders</OrdersTitle>
        <EmptyState>
          <h2>No orders yet</h2>
          <p>You haven't placed any orders yet.</p>
          <ShopButton onClick={() => navigate('/')}>Start Shopping</ShopButton>
        </EmptyState>
      </OrdersContainer>
    );
  }

  return (
    <OrdersContainer>
      <OrdersTitle>My Orders ({userOrders.length})</OrdersTitle>
      <OrderList>
        {userOrders.map((order) => (
          <OrderCard key={order.id}>
            <OrderHeader>
              <div>
                <OrderId>Order {order.id}</OrderId>
                <OrderDate>Placed on {formatDate(order.orderDate)}</OrderDate>
              </div>
              <OrderStatus status={order.status}>{order.status}</OrderStatus>
            </OrderHeader>

            <OrderItems>
              {order.items.map((item) => (
                <OrderItem key={item.id}>
                  <ItemImage src={item.image} alt={item.name} />
                  <ItemInfo>
                    <ItemName>{item.name}</ItemName>
                    <ItemQuantity>Qty: {item.quantity}</ItemQuantity>
                  </ItemInfo>
                  <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
                </OrderItem>
              ))}
            </OrderItems>

            <OrderFooter>
              <OrderTotal>Total: ${order.total.toFixed(2)}</OrderTotal>
            </OrderFooter>
          </OrderCard>
        ))}
      </OrderList>
    </OrdersContainer>
  );
};

export default Orders;