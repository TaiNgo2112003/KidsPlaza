// app/zalo-store/page.tsx
'use client';

import { useState } from 'react';
import styles from './ZaloStore.module.css';

const stores = [
  {
    id: 1,
    name: 'Kids Plaza Hà Nội',
    address: 'Số 180 Lê Trọng Tấn, Thanh Xuân, Hà Nội',
    phone: '1800.6608',
    hours: '8:00 - 21:00',
    position: { lat: 21.001, lng: 105.816 }
  },
  {
    id: 2,
    name: 'Kids Plaza Hồ Chí Minh',
    address: 'Số 123 Nguyễn Văn Linh, Quận 7, TP.HCM',
    phone: '1800.6609',
    hours: '8:00 - 21:30',
    position: { lat: 10.732, lng: 106.722 }
  },
  {
    id: 3,
    name: 'Kids Plaza Đà Nẵng',
    address: 'Số 456 Trần Phú, Hải Châu, Đà Nẵng',
    phone: '1800.6610',
    hours: '8:30 - 21:00',
    position: { lat: 16.068, lng: 108.212 }
  }
];

export default function ZaloStore() {
  const [selectedStore, setSelectedStore] = useState(stores[0]);
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hệ thống cửa hàng Kids Plaza</h1>
      <p className={styles.subtitle}>Kết nối với chúng tôi qua Zalo và đến thăm cửa hàng gần nhất</p>
      
      <div className={styles.content}>
        <div className={styles.storeList}>
          <h2 className={styles.sectionTitle}>Danh sách cửa hàng</h2>
          <div className={styles.stores}>
            {stores.map(store => (
              <div 
                key={store.id}
                className={`${styles.storeCard} ${selectedStore.id === store.id ? styles.active : ''}`}
                onClick={() => setSelectedStore(store)}
              >
                <h3>{store.name}</h3>
                <p><i className="fas fa-map-marker-alt"></i> {store.address}</p>
                <p><i className="fas fa-phone"></i> {store.phone}</p>
                <p><i className="fas fa-clock"></i> {store.hours}</p>
                <button className={styles.zaloButton}>
                  <img src="/icons/zalo.png" alt="Zalo" width={20} height={20} />
                  Kết nối Zalo
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.mapContainer}>
          {!mapLoaded && <div className={styles.mapLoading}>Đang tải bản đồ...</div>}
          <iframe
            src={`https://maps.google.com/maps?q=${selectedStore.position.lat},${selectedStore.position.lng}&z=15&output=embed`}
            className={styles.map}
            onLoad={() => setMapLoaded(true)}
            allowFullScreen
            loading="lazy"
          />
          <div className={styles.mapMarker}>
            <div className={styles.markerPin}></div>
            <div className={styles.markerPulse}></div>
          </div>
        </div>
      </div>
    </div>
  );
}