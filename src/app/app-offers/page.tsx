// app/app-offers/page.tsx
'use client';

import { useState, useEffect } from 'react';
import styles from './AppOffers.module.css';

export default function AppOffers() {
  const [coins, setCoins] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isPlaying && timeLeft === 0) {
      setIsPlaying(false);
      setGameWon(true);
      setCoins(20); 
    }
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    setCoins(0);
    setTimeLeft(30);
    setIsPlaying(true);
    setGameWon(false);
  };

  const collectCoin = () => {
    if (isPlaying) {
      setCoins(coins + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Tải App Kids Plaza ngay!</h1>
          <p className={styles.subtitle}>Nhận ưu đãi đặc biệt và chơi game nhận quà</p>
          <div className={styles.downloadButtons}>
            <button className={styles.appStoreButton}>
              <i className="fab fa-apple"></i> App Store
            </button>
            <button className={styles.playStoreButton}>
              <i className="fab fa-google-play"></i> Google Play
            </button>
          </div>
        </div>
        <div className={styles.phoneMockup}>
          <img src="/icons/IconHeader/Logo_KPZ.png" alt="Kids Plaza App" />
        </div>
      </div>

      <div className={styles.gameSection}>
        <h2 className={styles.sectionTitle}>Game nhận quà</h2>
        <p>Thu thập càng nhiều đồng xu càng tốt trong 30 giây!</p>
        
        {!isPlaying && !gameWon && (
          <button className={styles.startButton} onClick={startGame}>
            Bắt đầu chơi
          </button>
        )}

        {isPlaying && (
          <div className={styles.gameArea} onClick={collectCoin}>
            <div className={styles.gameInfo}>
              <div>Thời gian: {timeLeft}s</div>
              <div>Điểm: {coins} xu</div>
            </div>
            <div className={styles.coin}></div>
            <div className={styles.coin}></div>
            <div className={styles.coin}></div>
          </div>
        )}

        {gameWon && (
          <div className={styles.result}>
            <h3>Chúc mừng! Bạn đã nhận được 20 Kicoin</h3>
            <p>Tổng điểm: {coins} xu</p>
            <button className={styles.startButton} onClick={startGame}>
              Chơi lại
            </button>
          </div>
        )}
      </div>

      <div className={styles.benefits}>
        <h2 className={styles.sectionTitle}>Lợi ích khi tải app</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon} style={{ backgroundColor: '#fde68a' }}>
              <i className="fas fa-percentage"></i>
            </div>
            <h3>Giảm giá đặc biệt</h3>
            <p>Giảm thêm 5% cho tất cả đơn hàng qua app</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon} style={{ backgroundColor: '#a7f3d0' }}>
              <i className="fas fa-gift"></i>
            </div>
            <h3>Quà tặng độc quyền</h3>
            <p>Nhận quà tặng chỉ dành cho thành viên app</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon} style={{ backgroundColor: '#bfdbfe' }}>
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Đặt hàng siêu tốc</h3>
            <p>Mua sắm nhanh chóng chỉ với 3 bước</p>
          </div>
        </div>
      </div>
    </div>
  );
}