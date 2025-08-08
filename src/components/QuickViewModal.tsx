// components/QuickViewModal.tsx
"use client";

import Image from "next/image";
import { Product } from "./types";
import styles from './QuickViewModal.module.css';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function QuickViewModal({ product, onClose, onAddToCart }: QuickViewModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        
        <div className={styles.modalContent}>
          <div className={styles.imageContainer}>
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className={styles.productImage}
            />
          </div>
          
          <div className={styles.productInfo}>
            <h2 className={styles.productTitle}>{product.name}</h2>
            <p className={styles.productPrice}>{product.price.toLocaleString()}₫</p>
            <p className={styles.productDescription}>{product.description}</p>
            
            <div className={styles.buttonGroup}>
              <button 
                className={styles.viewDetailButton}
                onClick={() => window.location.href = `/products/${product.id}`}
              >
                Xem chi tiết
              </button>
              <button 
                className={styles.addToCartButton}
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
              >
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}