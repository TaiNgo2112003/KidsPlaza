// app/products/[id]/page.tsx
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Image from 'next/image';
import AddToCartButton from '../../../components/AddToCartButton';
import { GET_PRODUCT_BY_ID } from './../../../../graphql/queries';
import styles from './ProductDetail.module.css';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  details: string;
  stock: number;
}

// ✅ Định nghĩa kiểu đúng theo Next.js App Router
interface PageProps {
  params: {
    id: string;
  };
}

// ✅ Hàm fetch sản phẩm
async function getProduct(id: string): Promise<Product> {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_PRODUCT_BY_ID,
    variables: { id },
  });

  return data.product;
}

// ✅ Hàm render page
export default async function ProductDetail({ params }: PageProps) {
  const product = await getProduct(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.productLayout}>
        {/* Product Images */}
        <div>
          <div className={styles.mainImage}>
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className={styles.imageTransition}
              priority
            />
          </div>
          <div className={styles.thumbnailContainer}>
            {product.images.map((img, index) => (
              <div key={index} className={styles.thumbnail}>
                <Image
                  src={img}
                  alt={`${product.name} - ${index + 1}`}
                  width={120}
                  height={120}
                  className={styles.imageTransition}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.name}</h1>

          <div className={styles.priceContainer}>
            <span className={styles.price}>{product.price.toLocaleString()}₫</span>
            {product.stock > 0 ? (
              <span className={`${styles.stockStatus} ${styles.inStock}`}>Còn hàng</span>
            ) : (
              <span className={`${styles.stockStatus} ${styles.outOfStock}`}>Hết hàng</span>
            )}
          </div>

          <div className={styles.description}>
            <p>{product.description}</p>
          </div>

          <div className={styles.detailsSection}>
            <h3 className={styles.detailsTitle}>Chi tiết sản phẩm</h3>
            <div
              className={styles.detailsContent}
              dangerouslySetInnerHTML={{ __html: product.details }}
            />
          </div>

          <div className={styles.actionButtons}>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
