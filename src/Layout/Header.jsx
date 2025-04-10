import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, LogOut, Home } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/cartContext';
import styles from './Header.module.css';

const Header = () => {
  const { token, logout } = useAuth();
  const { state } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

if (!token || location.pathname === '/login') return null;

const handleLogout = () => {
    logout();
    navigate('/login');
};
const cartItemsCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

return (
<header className={styles.header}>
    <nav className={styles.nav}>
    <div className={styles.navContent}>
        <Link to="/" className={styles.logo}>
            <Home className="w-6 h-6" />
            Shop
    </Link>
    <div className={styles.actions}>
            <Link to="/cart" className={styles.cartLink}>
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className={styles.cartBadge}>
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <button
              onClick={handleLogout}
              className={styles.logoutButton}
            >
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;