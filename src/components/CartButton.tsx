// components/CartButton.tsx
"use client";

import { useCart } from "./CartContext";
import styles from './CartButton.module.css';
import { ShoppingBag } from 'lucide-react';

export default function CartButton() {
  const { cartItems, toggleCart } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <button 
      className={styles.cartButton}
      onClick={toggleCart}
      aria-label="Giỏ hàng"
    >
      <ShoppingBag size={24} />
      {itemCount > 0 && (
        <span className={styles.badge}>{itemCount}</span>
      )}
    </button>
  );
}