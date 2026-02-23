import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import {
  HeaderContainer,
  Logo,
  SearchBar,
  SearchInput,
  SearchButton,
  NavMenu,
  NavItem,
  CartIcon,
  CartCount,
  UserMenu,
  UserButton,
  Dropdown,
  DropdownItem,
} from './styles';

const Header = () => {
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <HeaderContainer>
      <Logo as={Link} to="/">
        🛒 Amazon Clone
      </Logo>

      <SearchBar onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchBar>

      <NavMenu>
        {user && (
          <>
            <NavItem as={Link} to="/cart">
              <CartIcon>🛒 Cart</CartIcon>
              <CartCount>{getCartCount()}</CartCount>
            </NavItem>

            <UserMenu>
              <UserButton onClick={() => setShowUserMenu(!showUserMenu)}>
                👤 {user.name}
              </UserButton>
              {showUserMenu && (
                <Dropdown>
                  <DropdownItem as={Link} to="/account" onClick={() => setShowUserMenu(false)}>
                    My Account
                  </DropdownItem>
                  <DropdownItem as={Link} to="/orders" onClick={() => setShowUserMenu(false)}>
                    My Orders
                  </DropdownItem>
                  <DropdownItem onClick={handleLogout}>
                    Logout
                  </DropdownItem>
                </Dropdown>
              )}
            </UserMenu>
          </>
        )}
        {!user && (
          <>
            <NavItem as={Link} to="/login">
              Sign In
            </NavItem>
            <NavItem as={Link} to="/signup">
              Sign Up
            </NavItem>
          </>
        )}
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
