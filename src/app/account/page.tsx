// app/account/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaHistory, FaSignOutAlt, FaEdit, FaBell, FaLock, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './AccountPage.module.css';

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: {
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
}

export default function AccountPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0987654321',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    joinedDate: '15/03/2022'
  });
  const [orders, setOrders] = useState<Order[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - thay bằng API thực tế
    setTimeout(() => {
      setOrders([
        {
          id: 'DH-2023-001',
          date: '20/06/2023',
          status: 'Đã giao',
          total: 1250000,
          items: [
            {
              name: 'Đồ chơi xếp hình Lego',
              quantity: 1,
              price: 899000,
              image: '/products/lego.jpg'
            },
            {
              name: 'Búp bê Barbie',
              quantity: 2,
              price: 350000,
              image: '/products/barbie.jpg'
            }
          ]
        },
        {
          id: 'DH-2023-002',
          date: '10/05/2023',
          status: 'Đang vận chuyển',
          total: 750000,
          items: [
            {
              name: 'Xe điều khiển từ xa',
              quantity: 1,
              price: 750000,
              image: '/products/remote-car.jpg'
            }
          ]
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    // Xử lý đăng xuất
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/');
  };

  const handleSaveProfile = () => {
    // Xử lý lưu thông tin
    setIsEditing(false);
    // Gọi API cập nhật thông tin ở đây
  };

  return (
    <div className={styles.accountContainer}>
      <div className={styles.accountHeader}>
        <h1>Tài khoản của tôi</h1>
        <p>Quản lý thông tin cá nhân và đơn hàng</p>
      </div>

      <div className={styles.accountLayout}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>
              <FaUser />
            </div>
            <h3>{user.name}</h3>
            <p>Thành viên từ {user.joinedDate}</p>
          </div>

          <nav className={styles.navMenu}>
            <button
              className={`${styles.navItem} ${activeTab === 'profile' ? styles.active : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <FaUser className={styles.navIcon} />
              <span>Thông tin cá nhân</span>
            </button>
            <button
              className={`${styles.navItem} ${activeTab === 'orders' ? styles.active : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <FaHistory className={styles.navIcon} />
              <span>Đơn hàng của tôi</span>
              <span className={styles.badge}>{orders.length}</span>
            </button>
            <button
              className={`${styles.navItem} ${activeTab === 'notifications' ? styles.active : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              <FaBell className={styles.navIcon} />
              <span>Thông báo</span>
            </button>
            <button
              className={`${styles.navItem} ${activeTab === 'security' ? styles.active : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <FaLock className={styles.navIcon} />
              <span>Bảo mật</span>
            </button>
            <button className={styles.navItem} onClick={handleLogout}>
              <FaSignOutAlt className={styles.navIcon} />
              <span>Đăng xuất</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {loading ? (
            <div className={styles.loading}>
              <div className={styles.spinner}></div>
              <p>Đang tải dữ liệu...</p>
            </div>
          ) : activeTab === 'profile' ? (
            <div className={styles.profileSection}>
              <div className={styles.sectionHeader}>
                <h2>Thông tin cá nhân</h2>
                {!isEditing ? (
                  <button className={styles.editButton} onClick={() => setIsEditing(true)}>
                    <FaEdit /> Chỉnh sửa
                  </button>
                ) : (
                  <button className={styles.saveButton} onClick={handleSaveProfile}>
                    Lưu thay đổi
                  </button>
                )}
              </div>

              <div className={styles.profileForm}>
                <div className={styles.formGroup}>
                  <label>Họ và tên</label>
                  {isEditing ? (
                    <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
                  ) : (
                    <p>{user.name}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label>Email</label>
                  <p>{user.email}</p>
                </div>

                <div className={styles.formGroup}>
                  <label>Số điện thoại</label>
                  {isEditing ? (
                    <input type="tel" value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} />
                  ) : (
                    <p>{user.phone}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label>Địa chỉ</label>
                  {isEditing ? (
                    <textarea value={user.address} onChange={(e) => setUser({...user, address: e.target.value})} />
                  ) : (
                    <div className={styles.address}>
                      <FaMapMarkerAlt className={styles.addressIcon} />
                      <p>{user.address}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : activeTab === 'orders' ? (
            <div className={styles.ordersSection}>
              <h2>Lịch sử đơn hàng</h2>
              
              {orders.length === 0 ? (
                <div className={styles.emptyOrders}>
                  <p>Bạn chưa có đơn hàng nào</p>
                  <button className={styles.shopButton} onClick={() => router.push('/')}>
                    Mua sắm ngay
                  </button>
                </div>
              ) : (
                <div className={styles.orderList}>
                  {orders.map((order) => (
                    <div key={order.id} className={styles.orderCard}>
                      <div className={styles.orderHeader}>
                        <div>
                          <span className={styles.orderId}>Mã đơn: {order.id}</span>
                          <span className={styles.orderDate}>{order.date}</span>
                        </div>
                        <div className={`${styles.orderStatus} ${styles[order.status.replace(/\s+/g, '')]}`}>
                          {order.status}
                        </div>
                      </div>
                      
                      <div className={styles.orderItems}>
                        {order.items.map((item, index) => (
                          <div key={index} className={styles.orderItem}>
                            <img src={item.image} alt={item.name} className={styles.itemImage} />
                            <div className={styles.itemInfo}>
                              <h4>{item.name}</h4>
                              <p>Số lượng: {item.quantity}</p>
                            </div>
                            <div className={styles.itemPrice}>
                              {item.price.toLocaleString()}₫
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className={styles.orderFooter}>
                        <div className={styles.orderTotal}>
                          Tổng cộng: <span>{order.total.toLocaleString()}₫</span>
                        </div>
                        <button 
                          className={styles.detailButton}
                          onClick={() => router.push(`/order/${order.id}`)}
                        >
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : activeTab === 'notifications' ? (
            <div className={styles.notificationsSection}>
              <h2>Thông báo</h2>
              <div className={styles.emptyNotifications}>
                <p>Bạn chưa có thông báo nào</p>
              </div>
            </div>
          ) : (
            <div className={styles.securitySection}>
              <h2>Bảo mật tài khoản</h2>
              <div className={styles.securityCard}>
                <h3>Đổi mật khẩu</h3>
                <div className={styles.securityForm}>
                  <div className={styles.formGroup}>
                    <label>Mật khẩu hiện tại</label>
                    <input type="password" placeholder="Nhập mật khẩu hiện tại" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Mật khẩu mới</label>
                    <input type="password" placeholder="Nhập mật khẩu mới" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Xác nhận mật khẩu mới</label>
                    <input type="password" placeholder="Nhập lại mật khẩu mới" />
                  </div>
                  <button className={styles.saveButton}>Cập nhật mật khẩu</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}