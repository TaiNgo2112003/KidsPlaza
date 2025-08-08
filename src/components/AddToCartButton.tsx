// components/AddToCartButton.tsx
"use client";

import { Product } from "./types/";
import { useCart } from "@/components/CartContext";
import { useState } from "react";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
        isAdding
          ? 'bg-green-500 text-white'
          : 'bg-pink-500 hover:bg-pink-600 text-white'
      }`}
    >
      {isAdding ? 'Đã thêm vào giỏ ✔' : 'Thêm vào giỏ hàng'}
    </button>
  );
}