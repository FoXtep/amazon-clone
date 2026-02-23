import React, { createContext, useContext, useState, useEffect } from 'react';

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('amazonOrders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('amazonOrders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    const newOrder = {
      ...order,
      id: `ORD-${Date.now()}`,
      orderDate: new Date().toISOString(),
      status: 'Delivered',
    };
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    return newOrder;
  };

  const getOrderById = (orderId) => {
    return orders.find(order => order.id === orderId);
  };

  const value = {
    orders,
    addOrder,
    getOrderById,
  };

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('useOrders must be used within OrdersProvider');
  }
  return context;
};