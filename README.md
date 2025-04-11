# React Shopping Website using Fake Store API

This is a responsive shopping website built using **React.js** and the **Fake Store API**. It includes user authentication, product listing, product detail view, cart functionality, and a smooth user experience — all wrapped in a clean, modern UI.

## Live Demo
 [Live Site Link](https://fake-stor.netlify.app/)

## GitHub Repository
 [Repository Link](https://github.com/danixDe/fake_store)

---

## Tech Stack

- **React.js** (Vite/CRA)
- **React Router v6+**
- **React Hooks**
- **Context API** for cart and auth state
- **CSS (mobile-first)** — no frameworks, just clean and responsive
- **React Hot Toast** for popups and confirmations
- **Fake Store API** for data and authentication

---

## Login Credentials

Use the Fake Store API credentials to login:
```
Username: johnd  
Password: m38rmF$
```

(You can find more test accounts on [Fake Store API docs](https://fakestoreapi.com/docs))

---

## Features

### Login Page
- Simple username/password form
- Authenticates using `POST /auth/login`
- Stores JWT token in `localStorage`
- On success: redirects to product listing

### Home (Product Listing Page)
- Fetches all products via `GET /products`
- Category-based filtering via `/products/category/:category`
- Responsive grid layout
- (Optional) Search functionality

### Product Detail Page
- Displays:
  - Product image
  - Title & description
  - Price
  - "Add to Cart" button

### Cart Page
- Shows all added products
- Allows quantity updates and removal
- Displays total price
- Checkout functionality:
  - On click: clears cart and shows "Order placed successfully!" popup (auto-disappears after 4s)

### Navigation/Header
- Links: `Home | Cart | Logout`
- Displays total cart items dynamically
- Logout:
  - Clears JWT token
  - Redirects to login

---

## Folder Structure (High-Level)

```
src/
├── context/
│   ├── AuthContext.js
│   └── cartContext.js
├── pages/
│   ├── Login.jsx
│   ├── Home.jsx
│   ├── Product.jsx
│   └── Cart.jsx
├── Layout/
│   ├── Header.jsx
│   └── Private.jsx
├── App.jsx
└── App.css
```

---

## How to Run Locally

```bash
git clone https://github.com/danixDe/fake_store.git
cd fake_store
npm install
npm run dev
```

---
## How to Use

1. **Login** using the Fake Store API test credentials.
2. **Home Page**:
   - Browse all products.
   - Filter by category or use the optional search bar.
3. **Click on a product** to view detailed info.
   - Press **Add to Cart** to include it in your cart.
4. **Add multiple items** from different products to the cart.
5. **Go to Cart**:
   - Increase/decrease quantities or remove items.
   - Click **Checkout** to place the order (cart will clear and a popup shows).
6. **Navigation**:
   - Click on `Home` or the site logo to return to the homepage.
   - Click `Logout` to sign out and clear your session.

---

## Final Notes

This project was created as part of a front-end internship assignment and focuses on demonstrating:
- Real-world React architecture
- REST API integration
- Component reusability
- State management with Context
- Mobile-first responsive design
---
