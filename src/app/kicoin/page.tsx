// app/kicoin/page.tsx
'use client';

import { useState, useEffect } from 'react';
import styles from './Kicoin.module.css';

export default function Kicoin() {
  const [coins, setCoins] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  // Simulate loading user's coins
  useEffect(() => {
    const savedCoins = localStorage.getItem('kicoins');
    setCoins(savedCoins ? parseInt(savedCoins) : 120);
  }, []);

  // Calculate progress towards next reward (500 coins)
  useEffect(() => {
    setProgress(Math.min((coins / 500) * 100, 100));
  }, [coins]);

  const addRandomCoins = () => {
    if (isAdding) return;
    
    setIsAdding(true);
    const addedCoins = Math.floor(Math.random() * 50) + 10;
    
    // Animate coin addition
    let current = coins;
    const interval = setInterval(() => {
      current += 1;
      setCoins(current);
      localStorage.setItem('kicoins', current.toString());
      if (current >= coins + addedCoins) {
        clearInterval(interval);
        setIsAdding(false);
      }
    }, 50);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Chương trình Thưởng Kicoin</h1>
        <p className={styles.subtitle}>Tích điểm đổi quà - Mua sắm thả ga</p>
      </div>

      <div className={styles.coinDisplay}>
        <div className={styles.coinCount}>
          <div className={styles.coinIcon}>
            <img src="/KCoin.png" alt="Kicoin" width={40} height={40} />
          </div>
          <div className={styles.coinAmount}>
            <span className={styles.coinNumber}>{coins}</span>
            <span className={styles.coinLabel}>Kicoin</span>
          </div>
        </div>

        <div className={styles.progressContainer}>
          <div className={styles.progressText}>
            <span>0</span>
            <span>500 Kicoin để đổi quà</span>
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className={styles.piggyBankContainer}>
        <div className={styles.piggyBank}>
          <div 
            className={styles.coinsInside}
            style={{ height: `${progress}%` }}
          ></div>
          <div className={styles.piggyBankBody}></div>
          <div className={styles.piggyBankFace}></div>
        </div>
        <button 
          className={styles.shakeButton}
          onClick={addRandomCoins}
          disabled={isAdding}
        >
          {isAdding ? 'Đang thêm Kicoin...' : 'Lắc để nhận thêm Kicoin'}
        </button>
      </div>

      <div className={styles.rewardsSection}>
        <h2 className={styles.sectionTitle}>Quà đổi Kicoin</h2>
        <div className={styles.rewardsGrid}>
          <div className={styles.rewardCard}>
            <div className={styles.rewardImage} style={{ backgroundImage: 'url(/Products/sp-04.webp)' }}></div>
            <div className={styles.rewardInfo}>
              <h3>Voucher 50.000đ</h3>
              <p>200 Kicoin</p>
              <button 
                className={styles.redeemButton}
                disabled={coins < 200}
              >
                Đổi ngay
              </button>
            </div>
          </div>
          <div className={styles.rewardCard}>
            <div className={styles.rewardImage} style={{ backgroundImage: 'url(/Products/sp-01.webp)' }}></div>
            <div className={styles.rewardInfo}>
              <h3>Bình nước cao cấp</h3>
              <p>350 Kicoin</p>
              <button 
                className={styles.redeemButton}
                disabled={coins < 350}
              >
                Đổi ngay
              </button>
            </div>
          </div>
          <div className={styles.rewardCard}>
            <div className={styles.rewardImage} style={{ backgroundImage: 'url(/Products/sp-01.webp)' }}></div>
            <div className={styles.rewardInfo}>
              <h3>Giảm 10% đơn hàng</h3>
              <p>500 Kicoin</p>
              <button 
                className={styles.redeemButton}
                disabled={coins < 500}
              >
                Đổi ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>Cách kiếm Kicoin</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Mua hàng</h3>
              <p>Nhận 1 Kicoin cho mỗi 10.000đ giá trị đơn hàng</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Đánh giá sản phẩm</h3>
              <p>Nhận 10 Kicoin cho mỗi đánh giá chất lượng</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Giới thiệu bạn bè</h3>
              <p>Nhận 50 Kicoin khi bạn bè mua hàng thành công</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}