import styled from 'styled-components';

// ProductCard Styles
export const Card = styled.a`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #f5f5f5;
`;

export const Content = styled.div`
  padding: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 14px;
  margin: 0 0 8px 0;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  flex-grow: 1;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #b12704;
  margin: 8px 0;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  font-size: 12px;
`;

export const Rating = styled.span`
  color: #ff9900;
  font-size: 14px;
`;

export const ReviewCount = styled.span`
  color: #666;
  font-size: 12px;
`;

export const AddButton = styled.button`
  background: linear-gradient(135deg, #ff9900 0%, #f39c12 100%);
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  margin-top: auto;
  transition: background 0.2s;

  &:hover {
    background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  }

  &:active {
    transform: scale(0.98);
  }
`;

// ProductList Styles
export const ProductListContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const MainContent = styled.main`
  flex: 1;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 0 15px 0;
  border-bottom: 1px solid #ddd;
`;

export const ResultCount = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0;
`;

export const SortSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #ff9900;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;

  h2 {
    margin-bottom: 10px;
    color: #333;
  }

  p {
    margin: 0;
  }
`;

// ProductDetail Styles
export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 4px;
  overflow: hidden;
`;

export const DetailImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
`;

export const InfoSection = styled.div``;

export const DetailTitle = styled.h1`
  font-size: 28px;
  margin: 0 0 15px 0;
  color: #333;
`;

export const DetailRating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 14px;
`;

export const DetailPrice = styled.div`
  font-size: 32px;
  color: #b12704;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const DetailDescription = styled.p`
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 14px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  label {
    font-weight: 600;
    color: #333;
  }

  select {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const DetailAddButton = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #ff9900 0%, #f39c12 100%);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 10px;

  &:hover {
    background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const BackButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #ddd;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #ccc;
  }
`;

export const StockStatus = styled.div`
  margin-bottom: 20px;
  padding: 12px;
  border-radius: 4px;
  font-weight: 600;
  background: ${props => props.inStock ? '#e8f5e9' : '#ffebee'};
  color: ${props => props.inStock ? '#2e7d32' : '#c62828'};
`;
