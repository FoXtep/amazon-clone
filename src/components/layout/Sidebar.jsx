import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CATEGORIES } from '../../config/products';
import {
  SidebarContainer,
  SidebarTitle,
  CategoryList,
  CategoryItem,
  SortSection,
  SortLabel,
  SortSelect,
  FilterSection,
  PriceRangeContainer,
  PriceLabel,
  PriceInputsRow,
  PriceNumberInput,
  PriceDisplay,
  FilterButton,
  ResetButton,
} from './styles';

const Sidebar = ({ sortBy, onSortChange, priceRange, onPriceChange }) => {
  const [searchParams] = useSearchParams();
  const [localMinPrice, setLocalMinPrice] = useState(priceRange.min);
  const [localMaxPrice, setLocalMaxPrice] = useState(priceRange.max);
  const selectedCategory = searchParams.get('category');

  const handlePriceFilter = () => {
    // Ensure min doesn't exceed max
    const min = Math.min(localMinPrice, localMaxPrice);
    const max = Math.max(localMinPrice, localMaxPrice);
    onPriceChange({ min, max });
  };

  const handleResetPrice = () => {
    setLocalMinPrice(0);
    setLocalMaxPrice(200);
    onPriceChange({ min: 0, max: 200 });
  };

  return (
    <SidebarContainer>
      <SidebarTitle>Categories</SidebarTitle>
      <CategoryList>
        <CategoryItem>
          <Link to="/" className={!selectedCategory ? 'active' : ''}>
            All Products
          </Link>
        </CategoryItem>
        {Object.values(CATEGORIES).map((category) => (
          <CategoryItem key={category}>
            <Link
              to={`/?category=${encodeURIComponent(category)}`}
              className={selectedCategory === category ? 'active' : ''}
            >
              {category}
            </Link>
          </CategoryItem>
        ))}
      </CategoryList>

      <FilterSection>
        <SidebarTitle>Price Range</SidebarTitle>
        <PriceRangeContainer>
          <PriceDisplay>
            ${Math.min(localMinPrice, localMaxPrice)} - ${Math.max(localMinPrice, localMaxPrice)}
          </PriceDisplay>
          <PriceInputsRow>
            <div>
              <PriceLabel htmlFor="min-price">Min</PriceLabel>
              <PriceNumberInput
                id="min-price"
                type="number"
                min="0"
                max="200"
                value={localMinPrice}
                onChange={(e) => setLocalMinPrice(parseInt(e.target.value) || 0)}
              />
            </div>
            <div>
              <PriceLabel htmlFor="max-price">Max</PriceLabel>
              <PriceNumberInput
                id="max-price"
                type="number"
                min="0"
                max="200"
                value={localMaxPrice}
                onChange={(e) => setLocalMaxPrice(parseInt(e.target.value) || 200)}
              />
            </div>
          </PriceInputsRow>
          <FilterButton onClick={handlePriceFilter}>Apply Filter</FilterButton>
          <ResetButton onClick={handleResetPrice}>Reset</ResetButton>
        </PriceRangeContainer>
      </FilterSection>

      <SortSection>
        <SidebarTitle>Sort By</SidebarTitle>
        <SortLabel htmlFor="sidebar-sort">Sort products:</SortLabel>
        <SortSelect
          id="sidebar-sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest First</option>
        </SortSelect>
      </SortSection>
    </SidebarContainer>
  );
};

export default Sidebar;
