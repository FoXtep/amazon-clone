import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../../config/products';
import ProductCard from './ProductCard';
import Sidebar from '../layout/Sidebar';
import {
  ProductListContainer,
  MainContent,
  FilterHeader,
  ResultCount,
  ProductGrid,
  EmptyState,
} from './styles';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('relevance');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });

  const category = searchParams.get('category');
  const search = searchParams.get('search');

  const filteredProducts = useMemo(() => {
    let products = PRODUCTS;

    // Filter by category
    if (category) {
      products = products.filter(p => p.category === category);
    }

    // Filter by search query
    if (search) {
      const lowerSearch = search.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(lowerSearch) ||
        p.description.toLowerCase().includes(lowerSearch)
      );
    }

    // Filter by price range
    products = products.filter(p =>
      p.price >= priceRange.min && p.price <= priceRange.max
    );

    // Sort products
    const sorted = [...products];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Assuming newer products have higher IDs
        sorted.sort((a, b) => b.id - a.id);
        break;
      case 'relevance':
      default:
        // Keep original order
        break;
    }

    return sorted;
  }, [category, search, sortBy, priceRange]);

  return (
    <ProductListContainer>
      <Sidebar 
        sortBy={sortBy} 
        onSortChange={setSortBy}
        priceRange={priceRange}
        onPriceChange={setPriceRange}
      />
      <MainContent>
        <FilterHeader>
          <ResultCount>
            Showing {filteredProducts.length} products
            {category && ` in ${category}`}
            {search && ` for "${search}"`}
            {(priceRange.min > 0 || priceRange.max < 200) && ` • $${priceRange.min} - $${priceRange.max}`}
          </ResultCount>
        </FilterHeader>

        {filteredProducts.length > 0 ? (
          <ProductGrid>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        ) : (
          <EmptyState>
            <h2>No products found</h2>
            <p>Try adjusting your search or filters</p>
          </EmptyState>
        )}
      </MainContent>
    </ProductListContainer>
  );
};

export default ProductList;
