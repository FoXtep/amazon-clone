# Amazon Clone - Setup & User Guide

## Quick Start

### 1. Installation
```bash
npm install
npm start
```

The app will open at `http://localhost:3000`

### 2. First Time Setup

#### Option A: Use Demo Account
- Email: `demo@example.com`
- Password: `demo123`

#### Option B: Create Your Own Account
1. Click "Sign Up" on the login page
2. Fill in your details (Name, Email, Password)
3. Click "Create Account"
4. You'll be automatically logged in

## Using the Application

### Browsing Products

1. **View All Products**: After login, you'll see all 25 products on the home page
2. **Filter by Category**: Use the sidebar on the left to filter by:
   - Electronics
   - Books
   - Clothing
   - Home & Kitchen
   - Sports

3. **Search Products**: Use the search bar at the top to find specific products
4. **Sort Products**: Use the sort dropdown to sort by:
   - Relevance
   - Price (Low to High)
   - Price (High to Low)
   - Highest Rated
   - Newest

### Viewing Product Details

1. Click on any product card to view detailed information
2. See product image, description, rating, and reviews
3. Select quantity (1-10)
4. Click "Add to Cart" to purchase

### Shopping Cart

1. Click the cart icon (🛒) in the header to view your cart
2. View all items with prices and quantities
3. **Update Quantity**: Use the dropdown to change quantity
4. **Remove Items**: Click "Remove" to delete items
5. View order summary with:
   - Subtotal
   - Shipping (Free)
   - Tax (10%)
   - Total

### Checkout

1. Click "Proceed to Checkout" from the cart
2. **Fill Shipping Address**:
   - First Name (required)
   - Last Name (required)
   - Email (required)
   - Phone Number (optional)
   - Street Address (required)
   - City (required)
   - State/Province (optional)
   - ZIP/Postal Code (optional)

3. **Fill Payment Information**:
   - Cardholder Name (required)
   - Card Number (required)
   - Expiry Date (optional)
   - CVV (optional)

4. Click "Place Order" to complete purchase

### Order Confirmation

1. After placing order, you'll see confirmation page with:
   - Order Number
   - Total Amount
   - Confirmation message

2. Click "Continue Shopping" to return to home page

### User Account

1. Click your name in the top right corner
2. View dropdown menu with options:
   - My Account
   - My Orders
   - Logout

## Features Explained

### Authentication
- **Secure Login**: Session stored in browser
- **Protected Routes**: Only logged-in users can shop
- **Auto-Logout**: Click logout to clear session

### Product Management
- **25 Products**: 5 in each category
- **Ratings & Reviews**: See customer feedback
- **Stock Status**: Check if items are in stock
- **Product Images**: Placeholder images for all products

### Shopping Cart
- **Persistent Storage**: Cart saved between sessions
- **Quantity Control**: Change amounts easily
- **Real-time Totals**: Automatic price calculations
- **Tax Calculation**: 10% tax on subtotal

### Checkout Process
- **Form Validation**: Required fields checked
- **Order Summary**: Review items before purchase
- **Confirmation**: Order number and details provided

## Data Storage

All data is stored locally in your browser:
- User accounts in localStorage
- Shopping cart in localStorage
- Session information in localStorage

**Note**: Data will be cleared if you clear browser cache

## Tips & Tricks

1. **Multiple Accounts**: Create different user accounts to test
2. **Product Filtering**: Combine category and search filters
3. **Bulk Orders**: Add multiple quantities of same product
4. **Cart Persistence**: Close and reopen browser - cart remains
5. **Demo Data**: Refresh page to reset if needed

## Troubleshooting

### Cart Items Disappear
- Check if you're logged in
- Clear browser cache and login again

### Can't Login
- Verify email and password are correct
- Try demo credentials first
- Create a new account if issues persist

### Page Won't Load
- Clear browser cache
- Hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Restart npm server

### Styling Issues
- Clear browser cache
- Close and reopen the page
- Try a different browser

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Notes

- All data is client-side (no server needed)
- Fast load times
- Smooth animations
- Responsive on all devices

## Security Notes (For Demo Only)

⚠️ **This is a demo application!**
- Passwords stored in plain text (never use in production)
- No real payment processing
- No backend authentication
- For educational purposes only

## Next Steps

1. Explore all product categories
2. Test the search and filter functionality
3. Add items to cart and checkout
4. Create multiple user accounts
5. Test cart persistence by refreshing page

---

**Enjoy your Amazon Clone experience! 🛍️**

For more information, see README.md
