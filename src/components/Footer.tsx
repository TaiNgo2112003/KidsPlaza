// src/components/Footer.tsx
import styles from './Footer.module.css';
import Image from 'next/image';
import { FaFacebook, FaTiktok, FaYoutube, FaAmazon,FaBell,  FaPhone,  } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Thông tin công ty */}
        <div className={styles.footerSection}>
          <h2 className={styles.footerBrand}>Kid<span className={styles.highlight}>s</span>Plaza</h2>
          <p className={styles.footerText}>Đơn vị chủ quản: Công ty Cổ phần Kids Plaza</p>
          <p className={styles.footerText}>Địa chỉ: 20 Thái Thịnh, P. Thịnh Quang, Đống Đa, Hà Nội.</p>
          <p className={styles.footerText}>Điện thoại: <a href="tel:02473000088" className={styles.footerLink}>(024) 7300 0088</a></p>
          <p className={styles.footerText}>Email: <a href="mailto:contact@kidsplaza.vn" className={styles.footerLink}>contact@kidsplaza.vn</a></p>
          <p className={styles.footerText}>Mã số thuế / Mã số doanh nghiệp: 0105330703</p>
          <p className={styles.footerText}>do Sở KHĐT Hà Nội cấp ngày 26/05/2011.</p>

          {/* ✅ Mục chứng nhận chất lượng */}
          <div className={styles.qualityCertificate}>
            <h4 className={styles.footerSubtitle}>Chứng nhận chất lượng</h4>
            {/* <Image
              src="/icons/quality-certificate.png"
              alt="Chứng nhận chất lượng"
              className={styles.certificateImage}
            /> */}
          </div>
        </div>

        {/* Về KidsPlaza */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>VỀ KIDSPLAZA</h3>
          <ul className={styles.footerList}>
            {[
              'Giới thiệu KidsPlaza',
              'Danh sách cửa hàng',
              'Báo chí nói về chúng tôi',
              'Kiến thức nuôi con',
              'Tuyển dụng',
              'Chính sách bảo mật',
              'Chính sách Ktoin'
            ].map((item) => (
              <li key={item} className={styles.footerListItem}>
                <a href="#" className={styles.footerLink}>{item}</a>
              </li>
            ))}
          </ul>
          <div className={styles.socialConnect}>
            <h4 className={styles.socialTitle}>KẾT NỐI VỚI CHÚNG TÔI</h4>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com" className={styles.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.tiktok.com" className={styles.tiktok} target="_blank" rel="noopener noreferrer">
                <FaTiktok size={30} />
              </a>
              <a href="https://www.youtube.com" className={styles.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube size={30} />
              </a>
              <a href="https://www.amazon.com" className={styles.amazon} target="_blank" rel="noopener noreferrer">
                <FaAmazon size={30} />
              </a>
            </div>
          </div>

        </div>


        {/* Hỗ trợ khách hàng */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>HỖ TRỢ KHÁCH HÀNG</h3>
          <ul className={styles.footerList}>
            {['Quy định đổi trả hàng', 'Phương thức thanh toán', 'Phương thức giao hàng',
              'Lớp học tiền sản miễn phí', 'Lớp học ăn dặm miễn phí', 'Gửi góp ý / Khiếu nại',
              'Chính sách bảo hành', 'Câu hỏi thường gặp', 'Hướng dẫn thanh toán VNPAY'].map((item) => (
                <li key={item} className={styles.footerListItem}>
                  <a href="#" className={styles.footerLink}>{item}</a>
                </li>
              ))}
          </ul>
        </div>

        {/* Nhận tin khuyến mãi & Phương thức thanh toán */}
        <div className={styles.footerSection}>
          <div className={styles.newsletter}>
            <h3 className={styles.footerTitle}>NHẬN TIN KHUYẾN MÃI & QUÀ</h3>
            <p className={styles.newsletterLabel}>Nhập địa chỉ email của bạn</p>
            <div className={styles.newsletterInput}>
              <input type="email" placeholder="Email của bạn..." />
              <button>Đăng ký</button>
            </div>
          </div>



          <div className={styles.paymentMethods}>
            <h4 className={styles.paymentTitle}>PHƯƠNG THỨC THANH TOÁN</h4>
            <div className={styles.paymentIcons}>
              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/visa-rectangle-icon.png" alt="Visa" width={40} height={24} />
              </span>
              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/master-card-rectangle-icon.png" alt="MasterCard" width={40} height={24} />
              </span>
              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/jcb-rectangle-icon.png" alt="JCB" width={40} height={24} />
              </span>
              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/cash-rectangle-icon.png" alt="CASH" width={40} height={24} />
              </span>
              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/momo-rectangle-icon.png" alt="Momo" width={40} height={24} />
              </span>

              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/banking-icon.png" alt="Banking" width={40} height={24} />
              </span>
              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/cod-icon.png" alt="Cod" width={40} height={24} />
              </span>
              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/vn-pay-icon.png" alt="VNPay" width={40} height={24} />
              </span>
              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/zalo-pay-icon.png" alt="ZLPay" width={40} height={24} />
              </span>
              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/shopee-pay-icon.png" alt="SPay" width={40} height={24} />
              </span>
            </div>
          </div>


          <div className={styles.shippingMethods}>
            <h4 className={styles.shippingTitle}>PHƯƠNG THỨC vẬN CHUYỂN</h4>
            <div className={styles.shippingIcons}>
              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/ghn-rectangle-icon.png" alt="GHN" width={40} height={24} />
              </span>
              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/ghtk-rectangle-icon.png" alt="GHTK" width={40} height={24} />
              </span>
              <span className={styles.paymentIcon}>
                <Image src="/icons/IconFooter/ahamove-rectangle-icon.png" alt="Ahamove" width={40} height={24} />
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Footer bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.certification}>
          <span>ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG</span>
        </div>
        <p className={styles.copyright}>
          Bản quyền © {new Date().getFullYear()} Kids Plaza - Hệ thống cửa hàng Mẹ Bầu và Em Bé Kids Plaza.
        </p>
      </div>
      <div style={{
          position: 'fixed',
          left: 10,
          bottom: 100,
          zIndex: 1000,
        }}>
          <FaBell size={40} color="#000" title="Ưu đãi" />
        </div>

        <div style={{
          position: 'fixed',
          right: 10,
          bottom: 100,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          zIndex: 1000,
        }}>
          <FaFacebook size={32} color="#3b5998" title="Facebook" />
          {/* <Image src="/icons/zalo.png" alt="Zalo" width={32} /> */}
          <FaPhone size={32} color="#0b1f4bff" title="Hotline" />
        </div>
    </footer>
  )
}