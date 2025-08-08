"use client";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS, GET_BANNERS } from "../../graphql/queries";
import BannerSlider from "@/components/BannerSlider";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  console.log("Products Data:", data);
  const {
    data: dataBanners,
    loading: loadingBanners,
    error: errorBanners,
  } = useQuery(GET_BANNERS);

  if (loading || loadingBanners) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error || errorBanners) return <div className="min-h-screen flex items-center justify-center text-red-500">Error loading data.</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/5">
            <Sidebar />
          </div>

          {/* Content */}
          <div className="lg:w-4/5">
            {/* Banner Slider */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-md">
              <BannerSlider banners={dataBanners?.banners} />
            </div>

            {/* Products Grid */}
            <FeaturedProducts products={data.products} />

          </div>
        </div>
      </div>
    </div>
  );
}