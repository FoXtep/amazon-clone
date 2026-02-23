import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('amazonUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Get all registered users
    const users = JSON.parse(localStorage.getItem('amazonUsers') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const userData = { email: foundUser.email, name: foundUser.name };
      setUser(userData);
      localStorage.setItem('amazonUser', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, error: 'Invalid email or password' };
  };

  const signup = (name, email, password, confirmPassword) => {
    // Validation
    if (!name || !email || !password || !confirmPassword) {
      return { success: false, error: 'All fields are required' };
    }

    if (password !== confirmPassword) {
      return { success: false, error: 'Passwords do not match' };
    }

    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' };
    }

    // Email validation - must have @ and a dot after @
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Invalid email format. Email must contain @ and a domain (e.g., user@example.com)' };
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('amazonUsers') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Email already registered' };
    }

    // Add new user
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('amazonUsers', JSON.stringify(users));

    // Auto login
    const userData = { email: newUser.email, name: newUser.name };
    setUser(userData);
    localStorage.setItem('amazonUser', JSON.stringify(userData));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('amazonUser');
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
