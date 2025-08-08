"use client";
import { useState } from "react";
import styles from './Sidebar.module.css';
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { GET_BANNERS, GET_BANNERS_PROGRAMS } from "../../graphql/queries";
import BannerSlider from "@/components/BannerSliderSidebar";
import IconSlide from "@/components/BannerIconsbar";
import { useQuery } from "@apollo/client";
import Avatar from '@mui/material/Avatar';

const categories = [
  { name: "Mẹ bầu và sau sinh", icon: "/SidebarIcons/baby.png" },
  { name: "Sữa công thức", icon: "/SidebarIcons/milk.png" },
  { name: "Thời trang bé", icon: "/SidebarIcons/fashion.png" },
  { name: "Bình sữa & ăn dặm", icon: "/SidebarIcons/bottle.png" },
  { name: "Đồ chơi giáo dục", icon: "/SidebarIcons/toy.png" },
  { name: "Đồ dùng gia đình", icon: "/SidebarIcons/home.png" },
  { name: "Tắm & chăm sóc", icon: "/SidebarIcons/bath.png" },
  { name: "Xe đẩy & phụ kiện", icon: "/SidebarIcons/stroller.png" },
  { name: "Chăn, gối & nệm", icon: "/SidebarIcons/pillow.png" },
  { name: "Sức khỏe & an toàn", icon: "/SidebarIcons/health.png" },
];

const submenus: { [key: number]: { title: string; items: string[] }[] } = {
  0: [
    { title: "Sữa bầu", items: ["Morinaga", "Enfamama", "Similac Mom"] },
    { title: "Dụng cụ", items: ["Máy hút sữa", "Túi trữ sữa", "Áo ngực cho con bú"] }
  ],
  1: [
    { title: "Sữa công thức", items: ["Aptamil", "NAN", "Meiji", "Friso", "Glico"] },
    { title: "Phụ kiện", items: ["Bình sữa", "Núm ti", "Máy tiệt trùng"] }
  ],
  2: [
    { title: "Bé trai", items: ["Áo thun", "Quần short", "Đồ bộ"] },
    { title: "Bé gái", items: ["Váy", "Đầm", "Phụ kiện"] }
  ]
};

export default function Sidebar() {
  const { data: dataIcons, loading, error } = useQuery(GET_BANNERS_PROGRAMS);
  const {
    data: dataBanners,
    loading: loadingBanners,
    error: errorBanners,
  } = useQuery(GET_BANNERS);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHoveringSidebar, setIsHoveringSidebar] = useState(false);

  return (
    <>
      {isHoveringSidebar && <div className={styles.overlay}></div>}

      <div className={styles.layoutWrapper}>
        {/* Sidebar Trái */}
        <div
          className={styles.sidebarContainer}
          onMouseEnter={() => setIsHoveringSidebar(true)}
          onMouseLeave={() => {
            setIsHoveringSidebar(false);
            setHoveredIndex(null);
          }}
        >
          <div className={styles.compactSidebar}>
            <h2 className={styles.sidebarTitle}>Danh mục</h2>
            <ul className={styles.categoryList}>
              {categories.map((cat, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`
                    ${styles.categoryItem} 
                    ${hoveredIndex === index ? styles.activeCategory : ''}
                  `}
                >
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    width={24}
                    height={24}
                    className={styles.categoryIcon}
                  />
                  <span className={styles.categoryName}>{cat.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {hoveredIndex !== null && (
            <div
              className={styles.submenu}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className={styles.submenuTitle}>
                {categories[hoveredIndex].name}
              </h3>

              <div className={styles.submenuGroups}>
                {(submenus[hoveredIndex] || [{ title: "Danh mục", items: ["Đang cập nhật..."] }]).map((group, idx) => (
                  <div key={idx} className={styles.submenuGroup}>
                    <h4 className={styles.submenuGroupTitle}>{group.title}</h4>
                    <ul className={styles.submenuItems}>
                      {group.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className={styles.submenuItem}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Nội dung chính */}
        <div className={styles.mainContent}>
          <BannerSlider banners={dataBanners?.banners} />
          <IconSlide bannerIconss={dataIcons?.bannersPrograms} />

        </div>

        {/* Sidebar Phải */}
        <div className={styles.sidebarRightContainer}>
          <div className={styles.compactSidebarRight}>

            {/* Greeting */}
            <div className={styles.avatarSection}>
              <Avatar
                alt="User"
                src="https://i.pravatar.cc/150?img=8"
                sx={{ width: 36, height: 36 }}
              />
              <div className={styles.greeting}>
                <small>Chào Ba/Mẹ đến với KidsPlaza(Vui lòng đăng nhập để kiểm tra điểm KiCoin)</small>
              </div>
            </div>

            {/* Đăng ký / Đăng nhập */}
            <div className={styles.authButtons}>
              <button className={styles.authBtn}>Đăng ký</button>
              <button className={styles.authBtn}>Đăng nhập</button>
            </div>

            {/* Tài khoản: 3 mục nằm ngang với icon tick */}
            <div className={styles.accountOptionsRow}>
              <div className={styles.accountItem}>
                <FaCheckCircle className={styles.iconTick} />
                <span>Đơn hàng</span>
              </div>
              <div className={styles.accountItem}>
                <FaCheckCircle className={styles.iconTick} /> 
                <span>KiCoin</span>
              </div>
              <div className={styles.accountItem}>
                <FaCheckCircle className={styles.iconTick} />
                <span>Tài khoản</span>
              </div>
            </div>

            {/* Banner Tải Ứng Dụng */}
            <div className={styles.banner}>
              <Image
                src="https://cdn.kidsplaza.vn/_next/image?url=https%3A%2F%2Fstatic.kidsplaza.vn%2Fassets%2Fimages%2Fdownload-app-banner-204x153.png&w=640&q=100&fm=webp"
                alt="Download App"
                width={280}
                height={210}
              />
            </div>

            {/* Mạng Xã Hội */}
            <div className={styles.socialRow}>
              <div className={styles.socialItem}>
                <Image src="/SidebarIcons/facebook.svg" alt="Facebook" width={18} height={18} />
                <span>1,2M</span>
                <span>Followers</span>
              </div>
              <div className={styles.socialItem}>
                <Image src="/SidebarIcons/youtube.svg" alt="YouTube" width={18} height={18} />
                <span>23,5K</span>
                <span>Subscribers</span>
              </div>
              <div className={styles.socialItem}>
                <Image src="/SidebarIcons/tiktok.svg" alt="TikTok" width={18} height={18} />
                <span>93K</span>
                <span>Followers</span>
              </div>
            </div>

          </div>
        </div>


      </div>
    </>
  );
}
