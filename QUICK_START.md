# Quick Start Guide - Amazon Clone

## 🚀 Start the App (5 seconds)

```bash
npm start
```

App opens at: `http://localhost:3000`

## 🔑 Login Credentials

### Demo Account (Ready to use!)
```
Email: demo@example.com
Password: demo123
```

### Create New Account
1. Click "Sign Up"
2. Fill in your details
3. Click "Create Account"

## 📦 What's Included

✅ **25 Products** across 5 categories  
✅ **Authentication** - Login/Signup  
✅ **Shopping Cart** - Add/Remove items  
✅ **Checkout** - Complete order flow  
✅ **Search** - Find products  
✅ **Filter** - By category  
✅ **Sort** - Price, rating, etc.  
✅ **Responsive** - Works on all devices  

## 🛍️ Quick Tour

1. **Login** → Use demo@example.com / demo123
2. **Browse** → See 25 products on home page
3. **Filter** → Use sidebar to filter by category
4. **Search** → Use search bar to find products
5. **Details** → Click product to see full info
6. **Cart** → Click cart icon or "Add to Cart"
7. **Checkout** → Fill shipping & payment info
8. **Confirm** → See order confirmation

## 📁 Project Structure

```
src/
├── components/
│   ├── auth/          → Login & Signup pages
│   ├── layout/        → Header, Sidebar, Footer
│   ├── products/      → Product browsing
│   ├── cart/          → Cart & Checkout
│   └── home/          → Home page
├── context/
│   ├── AuthContext.jsx    → User authentication
│   └── CartContext.jsx    → Shopping cart
├── config/
│   └── products.js    → 25 sample products
└── App.js             → Main routing
```

## 🎨 5 Product Categories

1. **Electronics** - Headphones, Charger, Webcam, SSD, Keyboard
2. **Books** - Clean Code, Pragmatic Programmer, Atomic Habits, etc.
3. **Clothing** - T-Shirt, Jeans, Sneakers, Jacket, Leggings
4. **Home & Kitchen** - Coffee Maker, Pots, Blender, Microwave, Boards
5. **Sports** - Yoga Mat, Dumbbells, Bands, Shoes, Tracker

## ⚡ Key Features

### Authentication
- Email/password login
- User registration
- Session persistence
- Protected shopping pages

### Products
- 25 sample products
- Product ratings (⭐)
- Product reviews
- Stock status
- Detailed descriptions

### Shopping
- Add to cart
- Update quantities
- Remove items
- Cart persistence
- Order summary

### Checkout
- Shipping form
- Payment form
- Form validation
- Order confirmation

### UI
- Amazon-like design
- Responsive layout
- Search functionality
- Category filtering
- Price sorting

## 🔧 Commands

```bash
# Start development server
npm start

# Build for production
npm build

# Run tests
npm test

# Eject (not recommended)
npm eject
```

## 🌐 Routes

| Route | Purpose | Protected |
|-------|---------|-----------|
| `/login` | User login | No |
| `/signup` | User registration | No |
| `/` | Home/Products | Yes |
| `/product/:id` | Product details | Yes |
| `/cart` | Shopping cart | Yes |
| `/checkout` | Checkout form | Yes |
| `/order-confirmation` | Order success | Yes |

## 💾 Data Storage

All data stored in browser (localStorage):
- User accounts
- Shopping cart
- User sessions

No backend server needed!

## 📱 Device Support

✅ Desktop  
✅ Tablet  
✅ Mobile  
✅ All modern browsers

## 🎯 Test Scenarios

### Test 1: New User
1. Click "Sign Up"
2. Create account
3. Browse products
4. Add to cart
5. Checkout

### Test 2: Demo Account
1. Use demo@example.com / demo123
2. Search for "book"
3. Filter by "Electronics"
4. Sort by "Price: Low to High"
5. Add items to cart

### Test 3: Cart Persistence
1. Add items to cart
2. Close browser completely
3. Reopen browser
4. Login again
5. Cart items still there!

### Test 4: Multiple Orders
1. Add items to cart
2. Checkout
3. See confirmation
4. Add more items
5. Checkout again

## 🎓 Learning Points

This project teaches:
- React hooks (useState, useEffect, useContext)
- Context API for state management
- React Router v6 for navigation
- Styled Components for CSS
- Form handling and validation
- localStorage for persistence
- Protected routes
- Responsive design

## 📚 Documentation Files

- **README.md** - Full feature documentation
- **SETUP_GUIDE.md** - Detailed setup instructions
- **FEATURES_SUMMARY.md** - Complete features list
- **QUICK_START.md** - This file!

## ⚠️ Important Notes

- Demo app (educational purposes)
- No real payment processing
- No backend server required
- All data stored locally
- Passwords stored in plain text (demo only)

## 🆘 Troubleshooting

**App won't start:**
```bash
npm install
npm start
```

**Cart empty after refresh:**
- Check if you're logged in
- Clear browser cache

**Can't login:**
- Try demo@example.com / demo123
- Create new account

**Styling looks off:**
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Clear cache

## 🎉 You're All Set!

```bash
npm start
```

Then:
1. Go to http://localhost:3000
2. Login with demo@example.com / demo123
3. Start shopping!

---

**Happy coding! 🚀**

For more details, see README.md or SETUP_GUIDE.md
