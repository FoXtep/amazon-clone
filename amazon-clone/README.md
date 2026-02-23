# Amazon Clone - E-Commerce Application

A small-scale clone of Amazon's desktop application built with React, featuring authentication, product categories, shopping cart, and checkout functionality.

## 🎯 Features

### Authentication
- **User Registration**: Create a new account with email and password validation
- **User Login**: Secure login with session persistence using localStorage
- **Protected Routes**: Only authenticated users can access shopping features
- **User Profile**: View user information in the header

### Products & Shopping
- **25 Sample Products** across 5 categories:
  - Electronics
  - Books
  - Clothing
  - Home & Kitchen
  - Sports
- **Product Browsing**: View all products with ratings and reviews
- **Category Filtering**: Filter products by category via sidebar
- **Search Functionality**: Search products by name or description
- **Product Sorting**: Sort by relevance, price (low-to-high, high-to-low), rating, and newest
- **Product Details**: View detailed product information with images and descriptions

### Shopping Cart
- **Add to Cart**: Add products with custom quantities
- **Cart Management**: View, update quantities, and remove items
- **Cart Persistence**: Cart data saved in localStorage
- **Order Summary**: View subtotal, shipping, tax, and total

### Checkout
- **Shipping Information**: Collect customer address and contact details
- **Payment Information**: Mock payment form for card details
- **Order Confirmation**: Display order number and total after successful checkout
- **Order History**: Placeholder for order tracking

### UI/UX
- **Responsive Design**: Works on desktop and mobile devices
- **Amazon-like Design**: Similar color scheme and layout to Amazon
- **Sticky Header**: Navigation always visible while scrolling
- **Clean Navigation**: Easy access to categories and user menu

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
```bash
cd /path/to/amazon-clone
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

## 📋 Demo Credentials

For testing purposes, use these credentials:

**Email:** demo@example.com  
**Password:** demo123

Or create your own account by clicking "Sign Up"

## 📁 Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── styles.js
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Footer.jsx
│   │   └── styles.js
│   ├── products/
│   │   ├── ProductList.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetail.jsx
│   │   └── styles.js
│   ├── cart/
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── OrderConfirmation.jsx
│   │   └── styles.js
│   ├── home/
│   │   └── Home.jsx
│   └── ProtectedRoute.jsx
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── config/
│   └── products.js
├── App.js
└── App.css
```

## 🔐 Authentication System

### How It Works
- Uses localStorage to store user data and sessions
- Passwords are stored in localStorage (for demo purposes only - not recommended for production)
- Session persists across browser refreshes
- Automatic logout clears session data

### User Data Structure
```javascript
{
  email: "user@example.com",
  name: "User Name",
  password: "hashed_password" // In production, use proper hashing
}
```

## 🛒 Shopping Cart Features

- **Add Products**: Click "Add to Cart" on product cards
- **Update Quantities**: Change quantity in cart
- **Remove Items**: Click "Remove" to delete items
- **Cart Persistence**: Cart data saved automatically
- **Order Summary**: Real-time calculation of totals including tax

## 📦 Product Categories

1. **Electronics** (5 products)
   - Wireless Headphones, USB-C Charger, 4K Webcam, SSD, Mechanical Keyboard

2. **Books** (5 products)
   - Clean Code, Pragmatic Programmer, Atomic Habits, Design Patterns, JavaScript: The Good Parts

3. **Clothing** (5 products)
   - T-Shirt, Jeans, Sneakers, Winter Jacket, Sports Leggings

4. **Home & Kitchen** (5 products)
   - Coffee Maker, Cookware Set, Blender, Microwave, Cutting Boards

5. **Sports** (5 products)
   - Yoga Mat, Dumbbells, Resistance Bands, Running Shoes, Fitness Tracker

## 🎨 Technologies Used

- **React 18**: UI framework
- **React Router v6**: Client-side routing
- **Styled Components**: CSS-in-JS styling
- **Context API**: State management
- **localStorage**: Data persistence

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with sidebar
- **Tablet**: Optimized grid layout
- **Mobile**: Single column layout, hidden sidebar (accessible via menu)

## 🔄 User Flow

1. **Authentication**
   - User lands on login page
   - Can sign up or use demo credentials
   - Session stored in localStorage

2. **Shopping**
   - Browse all products or filter by category
   - Search for specific products
   - Sort by various criteria
   - Click on product for details

3. **Cart Management**
   - Add items with custom quantities
   - View cart with order summary
   - Proceed to checkout

4. **Checkout**
   - Enter shipping address
   - Enter payment information
   - Place order
   - View confirmation

## 🧪 Testing the App

### Test Login
1. Go to login page
2. Use demo@example.com / demo123
3. Or create a new account

### Test Shopping
1. Browse products on home page
2. Filter by category using sidebar
3. Search for products using header search
4. Sort by different criteria

### Test Cart
1. Add products to cart
2. Go to cart page
3. Modify quantities
4. Remove items

### Test Checkout
1. Proceed to checkout from cart
2. Fill in shipping details
3. Enter payment information
4. Complete order

## ⚠️ Important Notes

- This is a **demo application** for educational purposes
- Passwords are stored in localStorage (never do this in production)
- No real payment processing occurs
- No backend server required
- All data is client-side only

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] Real authentication with JWT
- [ ] Database for products and orders
- [ ] Payment gateway integration (Stripe, PayPal)
- [ ] Order history and tracking
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced filtering options
- [ ] Admin dashboard
- [ ] Email notifications

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Development

To modify products, edit `src/config/products.js`

To change styling, modify the styled-components in each component's `styles.js` file

To add new features, create new components in appropriate directories and import them in `App.js`

---

**Happy Shopping! 🛍️**