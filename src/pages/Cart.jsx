import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/cartContext';
import toast from 'react-hot-toast';
import styles from './Cart.module.css';

const Cart = () => {
  const { state, dispatch } = useCart();
  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity },
    });
  };

  const handleRemoveItem = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
    toast.success('Item removed from cart');
  };

  const handleCheckout = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast.success('Order placed successfully!', {
      duration: 4000,
    });
  };

  if (state.items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2 className={styles.emptyCartTitle}>Your cart is empty</h2>
        <p className={styles.emptyCartMessage}>Add some items to your cart to get started</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shopping Cart</h1>
      <div className={styles.cartContainer}>
        {state.items.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{item.title}</h3>
              <p className={styles.productPrice}>
                ${item.price.toFixed(2)}
              </p>
            </div>
            <div className={styles.quantityControls}>
              <div className={styles.quantityContainer}>
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  className={styles.quantityButton}
                >
                  <Minus className={styles.control} />
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  className={styles.quantityButton}
                >
                  <Plus className={styles.control} />
                </button>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className={styles.removeButton}
              >
                <Trash2 className={styles.control} />
              </button>
            </div>
          </div>
        ))}
        <div className={styles.cartFooter}>
          <div className={styles.total}>
            <span>Total:</span>
            <span>${state.total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout} className={styles.checkoutButton}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;