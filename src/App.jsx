import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/cartContext';
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Header from './Layout/Header';
import PrivateRoute from './Layout/Private';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
    <Router>
        <div className="container">
        <Header />
        <main className="main">
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
                <PrivateRoute>
                 <Home />
                </PrivateRoute>} />
            <Route path="/product/:id" element={
                <PrivateRoute>
                    <Product />
                </PrivateRoute>} />
                <Route path="/cart" element={
                  <PrivateRoute>
                    <Cart />
                </PrivateRoute> } />
                
        <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
        </main>
    <Toaster position="top-center" />
        </div>
    </Router>
 </CartProvider>
</AuthProvider>
  );
}

export default App;