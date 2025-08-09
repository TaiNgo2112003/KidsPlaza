// components/FeaturedProducts.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "./CartContext";
import { useRouter } from "next/navigation";
import styles from './FeaturedProducts.module.css';
import QuickViewModal from "./QuickViewModal";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  // Hiển thị 8 sản phẩm ban đầu, sau đó hiển thị tất cả khi bấm "Hiện thêm"
  const displayedProducts = showAll ? products : products.slice(0, 8);

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  return (
    <div className={styles.featuredContainer}>
      <h2 className={styles.sectionTitle}>Sản phẩm nổi bật</h2>
      <div className={styles.productsGrid}>
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className={`${styles.productCard} ${hoveredProduct === product.id ? styles.cardHover : ''}`}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div 
              className={styles.imageContainer}
              onClick={() => router.push(`/products/${product.id}`)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className={styles.productImage}
                priority={products.indexOf(product) < 4} // Tối ưu load ảnh
              />
              <div 
                className={`${styles.quickView} ${hoveredProduct === product.id ? styles.quickViewVisible : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuickView(product);
                }}
              >
                <span>Xem nhanh</span>
                <svg viewBox="0 0 24 24" className={styles.eyeIcon}>
                  <path d="M12 9a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0 9.821 9.821 0 0 0-17.64 0z"/>
                </svg>
              </div>
            </div>
            <div className={styles.productInfo}>
              <h3 
                className={styles.productName}
                onClick={() => router.push(`/products/${product.id}`)}
              >
                {product.name}
              </h3>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.priceCartContainer}>
                <p className={styles.productPrice}>{product.price.toLocaleString()}₫</p>
                <button 
                  className={styles.addToCartButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  aria-label={`Thêm ${product.name} vào giỏ hàng`}
                >
                  <svg className={styles.cartIcon} viewBox="0 0 24 24">
                    <path d="M17 18a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6.16 10h7.65l2.57-5H6.32l.84 5Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length > 8 && !showAll && (
        <div className={styles.showMoreContainer}>
          <button 
            className={styles.showMoreButton}
            onClick={() => setShowAll(true)}
          >
            Hiện thêm sản phẩm
            <svg className={styles.chevronIcon} viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </button>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}