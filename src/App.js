import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { OrdersProvider } from './context/OrdersContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/home/Home';
import ProductDetail from './components/products/ProductDetail';
import Cart from './components/cart/Cart';
import Checkout from './components/cart/Checkout';
import OrderConfirmation from './components/cart/OrderConfirmation';
import Orders from './components/orders/Orders';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <OrdersProvider>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              <main style={{ flex: 1 }}>
                <Routes>
                  {/* Auth Routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />

                  {/* Protected Routes */}
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/product/:productId"
                    element={
                      <ProtectedRoute>
                        <ProductDetail />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/checkout"
                    element={
                      <ProtectedRoute>
                        <Checkout />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/order-confirmation"
                    element={
                      <ProtectedRoute>
                        <OrderConfirmation />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/orders"
                    element={
                      <ProtectedRoute>
                        <Orders />
                      </ProtectedRoute>
                    }
                  />

                  {/* Catch all */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </OrdersProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
