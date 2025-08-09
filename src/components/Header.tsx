"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { FaHistory, FaUser, FaShoppingCart, FaSearch, FaTimes, FaStream } from 'react-icons/fa';
import LoginPopup from './LoginPopup';
import { useRouter } from 'next/navigation';
import { useQuery, gql } from "@apollo/client";
import Image from 'next/image';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      image
      category
    }
  }
`;

const Header = () => {
  const [isTop, setIsTop] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { data, loading } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    const authToken = document.cookie.includes('authToken');
    setIsLoggedIn(authToken);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() && data?.products) {
      const results = data.products.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, data]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setShowResults(false);
    }
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`);
    setSearchQuery("");
    setShowResults(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/icons/IconHeader/Logo_KPZ.png"
              alt="KidsPlaza"
              width={120}
              height={40}
              priority
            />
          </Link>

          <div className={styles.searchWrapper} ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
              <div className={styles.searchInputContainer}>
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowResults(true);
                  }}
                  className={styles.searchInput}
                  onFocus={() => setShowResults(true)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    className={styles.clearButton}
                    onClick={() => {
                      setSearchQuery("");
                      setShowResults(false);
                    }}
                  >
                    <FaTimes />
                  </button>
                )}
                <button type="submit" className={styles.searchButton}>
                  <FaSearch />
                </button>
              </div>
            </form>

            {showResults && filteredProducts.length > 0 && (
              <div className={styles.searchResults}>
                <div className={styles.resultsHeader}>
                  <span>Kết quả tìm kiếm</span>
                  <span>{filteredProducts.length} sản phẩm</span>
                </div>
                <div className={styles.resultsList}>
                  {filteredProducts.slice(0, 5).map((product) => (
                    <div
                      key={product.id}
                      className={styles.resultItem}
                      onClick={() => handleProductClick(product.id)}
                    >
                      <div className={styles.productImage}>
                        <Image
                          src={product.image || '/images/product-placeholder.jpg'}
                          alt={product.name}
                          width={60}
                          height={60}
                          objectFit="cover"
                        />
                      </div>
                      <div className={styles.productInfo}>
                        <h4 className={styles.productName}>{product.name}</h4>
                        <div className={styles.productMeta}>
                          <span className={styles.productCategory}>{product.category}</span>
                          <span className={styles.productPrice}>{product.price.toLocaleString()}₫</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {filteredProducts.length > 5 && (
                  <div className={styles.viewAll}>
                    <button onClick={() => {
                      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
                      setShowResults(false);
                    }}>
                      Xem tất cả {filteredProducts.length} kết quả
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className={styles.iconsContainer}>
            <Link href="/order-history" className={styles.iconItem}>
              <FaHistory />
              <span>Lịch sử đơn hàng</span>
            </Link>

            <button
              onClick={() => setShowLogin(true)}
              className={styles.iconItem}
            >
              <FaUser />
              <span>{isLoggedIn ? 'Tài khoản' : 'Đăng nhập'}</span>
            </button>

            <Link href="/cart" className={styles.iconItem}>
              <FaShoppingCart />
              <span>Giỏ hàng</span>
            </Link>
            <Link href="/account" className={styles.iconItem}>
              <FaStream />
              <span>Quản lý</span>
            </Link>
          </div>
        </div>
      </div>

      {isTop && (
        <div className={styles.bottomBar}>
          <div className={styles.bottomBarContent}>
            <Link href="/categories" className={styles.bottomLink}>
              <i className="fas fa-list"></i> Danh mục
            </Link>

            <Link href="/zalo-store" className={styles.bottomLink}>
              <i className="fab fa-zalo"></i> Zalo cửa hàng
            </Link>

            <Link href="/app-offers" className={styles.bottomLink}>
              <i className="fas fa-mobile-alt"></i> Ưu đãi khi tải app
            </Link>

            <Link href="/kicoin" className={styles.bottomLink}>
              <i className="fas fa-coins"></i> Thưởng Kicoin
            </Link>

            <div className={styles.hotline}>
              <i className="fas fa-phone-alt"></i> Hotline: 1800.6608
            </div>
          </div>
        </div>
      )}

      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
    </header>
  );
};

export default Header;
