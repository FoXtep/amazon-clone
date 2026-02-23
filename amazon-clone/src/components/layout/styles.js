import styled from 'styled-components';

// Header Styles
export const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #232f3e 0%, #131a22 100%);
  color: white;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  white-space: nowrap;
  min-width: 150px;

  &:hover {
    color: #ff9900;
  }
`;

export const SearchBar = styled.form`
  flex: 1;
  display: flex;
  gap: 5px;
  max-width: 500px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ff9900;
  }
`;

export const SearchButton = styled.button`
  padding: 8px 20px;
  background-color: #ff9900;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e68a00;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.2s;
  position: relative;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const CartIcon = styled.span`
  display: inline-block;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff9900;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;

export const UserMenu = styled.div`
  position: relative;
`;

export const UserButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 180px;
  margin-top: 8px;
  z-index: 1000;
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 12px 16px;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

// Sidebar Styles
export const SidebarContainer = styled.aside`
  width: 250px;
  background: #f5f5f5;
  padding: 20px;
  border-right: 1px solid #ddd;
  min-height: calc(100vh - 60px);
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarTitle = styled.h3`
  color: #333;
  margin-bottom: 15px;
  font-size: 16px;
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
`;

export const CategoryItem = styled.li`
  margin-bottom: 10px;

  a {
    color: #0066c0;
    text-decoration: none;
    font-size: 14px;
    padding: 8px;
    border-radius: 4px;
    display: block;
    transition: background-color 0.2s;

    &:hover {
      background-color: #e8f4f8;
    }

    &.active {
      background-color: #ddd;
      color: #333;
      font-weight: bold;
    }
  }
`;

export const FilterSection = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
`;

export const PriceRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PriceDisplay = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  text-align: center;
  padding: 8px;
  background: #f0f0f0;
  border-radius: 4px;
`;

export const PriceInputsRow = styled.div`
  display: flex;
  gap: 10px;

  > div {
    flex: 1;
  }
`;

export const PriceNumberInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #ff9900;
    box-shadow: 0 0 0 2px rgba(255, 153, 0, 0.2);
  }

  /* Hide number spinner arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export const PriceLabel = styled.label`
  display: block;
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
`;

export const FilterButton = styled.button`
  padding: 8px 12px;
  background: linear-gradient(135deg, #ff9900 0%, #f39c12 100%);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  }
`;

export const ResetButton = styled.button`
  padding: 8px 12px;
  background: #ddd;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #ccc;
  }
`;

export const SortSection = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
`;

export const SortLabel = styled.label`
  display: block;
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
`;

export const SortSelect = styled.select`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #ff9900;
    box-shadow: 0 0 0 2px rgba(255, 153, 0, 0.2);
  }

  &:hover {
    border-color: #999;
  }
`;

// Footer Styles
export const FooterContainer = styled.footer`
  background: #232f3e;
  color: white;
  padding: 40px 20px;
  margin-top: 40px;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`;

export const FooterSection = styled.div`
  h4 {
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;

    a {
      color: #aaa;
      text-decoration: none;
      font-size: 12px;

      &:hover {
        color: #ff9900;
      }
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #555;
  margin-top: 20px;
  font-size: 12px;
  color: #aaa;
`;
