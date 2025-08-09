// app/cart/page.tsx
'use client';

import { useCart } from '../../components/CartContext';

import { X, Plus, Minus, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CartPage.module.css';

export default function CartPage() {
  const { 
    cartItems, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    cartTotal,
    clearCart
  } = useCart();

  // Tính phí vận chuyển (có thể thay bằng API tính phí thực tế)
  const shippingFee = cartTotal > 500000 ? 0 : 30000;
  const totalWithShipping = cartTotal + shippingFee;

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartContainer}>
        {/* Header */}
        <div className={styles.cartHeader}>
          <Link href="/" className={styles.backButton}>
            <ChevronLeft size={24} />
            <span>Tiếp tục mua sắm</span>
          </Link>
          <h1 className={styles.pageTitle}>Giỏ hàng của bạn</h1>
          {cartItems.length > 0 && (
            <button 
              onClick={clearCart}
              className={styles.clearCartButton}
            >
              Xóa tất cả
            </button>
          )}
        </div>

        {/* Cart Content */}
        <div className={styles.cartContent}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <div className={styles.emptyCartIcon}>
                <Image
                  src="/images/empty-cart.png"
                  alt="Empty cart"
                  width={200}
                  height={200}
                />
              </div>
              <h2>Giỏ hàng của bạn đang trống</h2>
              <p>Hãy khám phá và thêm sản phẩm bạn yêu thích</p>
              <Link href="/" className={styles.shopButton}>
                Mua sắm ngay
              </Link>
            </div>
          ) : (
            <>
              {/* Danh sách sản phẩm */}
              <div className={styles.cartItems}>
                {cartItems.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.itemImageContainer}>
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        width={120}
                        height={120}
                        className={styles.itemImage}
                      />
                    </div>
                    
                    <div className={styles.itemDetails}>
                      <div className={styles.itemHeader}>
                        <h3 className={styles.itemName}>{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className={styles.removeButton}
                        >
                          <X size={18} />
                        </button>
                      </div>
                      
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
                  </div>
                ))}
              </div>

              {/* Voucher Input */}
              <div className={styles.voucherSection}>
                <input
                  type="text"
                  placeholder="Nhập mã giảm giá..."
                  className={styles.voucherInput}
                />
                <button className={styles.applyButton}>Áp dụng</button>
              </div>

              {/* Order Summary */}
              <div className={styles.orderSummary}>
                <h3 className={styles.summaryTitle}>Tóm tắt đơn hàng</h3>
                
                <div className={styles.summaryRow}>
                  <span>Tạm tính:</span>
                  <span>{cartTotal.toLocaleString()}₫</span>
                </div>
                
                <div className={styles.summaryRow}>
                  <span>Phí vận chuyển:</span>
                  <span>
                    {shippingFee === 0 ? 'Miễn phí' : `${shippingFee.toLocaleString()}₫`}
                  </span>
                </div>
                
                <div className={styles.summaryRow}>
                  <span>Giảm giá:</span>
                  <span>0₫</span>
                </div>
                
                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                  <span>Tổng cộng:</span>
                  <span>{totalWithShipping.toLocaleString()}₫</span>
                </div>
                
                <div className={styles.checkoutActions}>
                  <Link href="/checkout" className={styles.checkoutButton}>
                    Tiến hành thanh toán
                  </Link>
                  
                  <div className={styles.paymentMethods}>
                    <span>Chấp nhận thanh toán:</span>
                    <div className={styles.paymentIcons}>
                      <Image src="/icons/IconFooter/visa-rectangle-icon.png" alt="Visa" width={40} height={25} />
                      <Image src="/icons/IconFooter/master-card-rectangle-icon.png" alt="Mastercard" width={40} height={25} />
                      <Image src="/icons/IconFooter/JCB-rectangle-icon.png" alt="JCB" width={40} height={25} />
                      <Image src="/icons/IconFooter/cod-icon.png" alt="COD" width={40} height={25} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}