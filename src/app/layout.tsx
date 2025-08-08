import "./globals.css";
import type { Metadata } from "next";
import ApolloWrapper from "../components/ApolloWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from '../components/CartContext';
import CartButton from '../components/CartButton';
import ShoppingCart from '../components/ShoppingCart';
export const metadata: Metadata = {
  title: "Kids Plaza",
  description: "Mini e-commerce with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <CartProvider>

        <body className="relative">
          <CartButton />

          <Header />
          <ApolloWrapper>
            <main style={{ minHeight: "80vh", paddingTop: "100px" }}>
              {children}
              <ShoppingCart />

            </main>
          </ApolloWrapper>

          <Footer />
        </body>
      </CartProvider>

    </html>
  );
}
