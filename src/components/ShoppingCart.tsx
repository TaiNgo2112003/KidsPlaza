// components/ShoppingCart.tsx
"use client";

import { useCart } from "./CartContext";
import styles from './ShoppingCart.module.css';
import { X, Plus, Minus } from 'lucide-react';

export default function ShoppingCart() {
  const { 
    cartItems, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    cartTotal, 
    isCartOpen, 
    toggleCart 
  } = useCart();

  return (
    <div className={`${styles.cartContainer} ${isCartOpen ? styles.cartOpen : ''}`}>
      <div className={styles.cartHeader}>
        <h2 className={styles.cartTitle}>Giỏ hàng của bạn</h2>
        <button onClick={toggleCart} className={styles.closeButton}>
          <X size={24} />
        </button>
      </div>
      
      <div className={styles.cartContent}>
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <div className={styles.emptyCartIcon}>🛒</div>
            <p>Giỏ hàng của bạn đang trống</p>
            <button onClick={toggleCart} className={styles.continueShopping}>
              Tiếp tục mua sắm
            </button>
          </div>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImageContainer}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className={styles.itemImage}
                    />
                  </div>
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemPrice}>{item.price.toLocaleString()}₫</p>
                    <div className={styles.quantityControls}>
                      <button 
                        onClick={() => decreaseQuantity(item.id)}
                        className={styles.quantityButton}
                        disabled={item.quantity === 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className={styles.quantity}>{item.quantity}</span>
                      <button 
                        onClick={() => increaseQuantity(item.id)}
                        className={styles.quantityButton}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className={styles.removeButton}
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className={styles.cartSummary}>
              <div className={styles.summaryRow}>
                <span>Tạm tính:</span>
                <span>{cartTotal.toLocaleString()}₫</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Phí vận chuyển:</span>
                <span>Miễn phí</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Tổng cộng:</span>
                <span>{cartTotal.toLocaleString()}₫</span>
              </div>
              
              <button className={styles.checkoutButton}>
                Thanh toán
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}