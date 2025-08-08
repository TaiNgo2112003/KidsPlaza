// src/components/Header.tsx
"use client";
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { FaHistory, FaUser, FaShoppingCart } from 'react-icons/fa';
import LoginPopup from './LoginPopup';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isTop, setIsTop] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

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

  return (
    <header className={styles.header}>
      {/* Top Fixed Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <img src="/icons/IconHeader/Logo_KPZ.png" alt="KidsPlaza" />
          </Link>

          {/* Search Bar */}
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Tìm kiếm sản phẩm..." className={styles.searchInput} />
            <button className={styles.searchButton}>
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* Right Icons */}
          <div className={styles.iconsContainer}>
            <Link href="/order-history" className={styles.iconItem}>
              <FaHistory />
              <span>Lịch sử đơn hàng</span>
            </Link>

            {/* Thay đổi phần này từ Link thành button */}
            <button
              onClick={() => setShowLogin(true)}
              className={styles.iconItem}
            >
              <FaUser />
              <span>{isLoggedIn ? 'Logged in' : 'Đăng nhập'}</span>
            </button>

            <Link href="/cart" className={styles.iconItem}>
              <FaShoppingCart />
              <span>Giỏ hàng</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Only shows at top of page */}
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

      {/* Thêm Login Popup vào cuối component */}
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
    </header>
  );
};

export default Header;