// components/LoginPopup.tsx
'use client';

import { useState, useEffect } from 'react';
import { FaTimes, FaUser, FaLock, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import styles from './LoginPopup.module.css';
import Cookies from 'js-cookie';

const LoginPopup = ({ onClose }: { onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedEmail = Cookies.get('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email && password) {
        // Set session cookie (expires when browser closes)
        document.cookie = `authToken=demo-token; path=/`;
        
        if (rememberMe) {
          Cookies.set('rememberedEmail', email, { expires: 30 });
        } else {
          Cookies.remove('rememberedEmail');
        }

        onClose();
        router.refresh();
      } else {
        setError('Vui lòng nhập email và mật khẩu');
      }
    } catch (err) {
      setError('Đăng nhập thất bại. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popupContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <div className={styles.authHeader}>
          <h2>{isLogin ? 'Đăng nhập' : 'Tạo tài khoản'}</h2>
          <p>{isLogin ? 'Chào mừng trở lại!' : 'Tham gia cùng chúng tôi'}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.authForm}>
          {error && <div className={styles.errorMessage}>{error}</div>}

          <div className={styles.inputGroup}>
            <FaUser className={styles.inputIcon} />
            <input
              type="email"
              placeholder="Email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <FaLock className={styles.inputIcon} />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {isLogin && (
            <div className={styles.rememberMe}>
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Ghi nhớ đăng nhập</label>
              <a href="#" className={styles.forgotPassword}>
                Quên mật khẩu?
              </a>
            </div>
          )}

          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? (
              <span className={styles.spinner}></span>
            ) : isLogin ? (
              'Đăng nhập'
            ) : (
              'Đăng ký'
            )}
          </button>
        </form>

        <div className={styles.socialAuth}>
          <p>Hoặc tiếp tục với</p>
          <div className={styles.socialButtons}>
            <button type="button" className={styles.googleButton}>
              <FaGoogle /> Google
            </button>
            <button type="button" className={styles.facebookButton}>
              <FaFacebookF /> Facebook
            </button>
          </div>
        </div>

        <div className={styles.authFooter}>
          {isLogin ? (
            <>
              Chưa có tài khoản?{' '}
              <button type="button" onClick={() => setIsLogin(false)}>
                Đăng ký ngay
              </button>
            </>
          ) : (
            <>
              Đã có tài khoản?{' '}
              <button type="button" onClick={() => setIsLogin(true)}>
                Đăng nhập
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;