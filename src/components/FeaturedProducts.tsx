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

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  return (
    <div className={styles.featuredContainer}>
      <h2 className={styles.sectionTitle}>Sản phẩm nổi bật</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
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
              />
              <div 
                className={`${styles.quickView} ${hoveredProduct === product.id ? styles.quickViewVisible : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuickView(product);
                }}
              >
                Xem nhanh
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
              <p className={styles.productPrice}>{product.price.toLocaleString()}₫</p>
              <button 
                className={styles.addToCartButton}
                onClick={() => addToCart(product)}
              >
                <span>Thêm vào giỏ</span>
                <svg className={styles.cartIcon} viewBox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

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