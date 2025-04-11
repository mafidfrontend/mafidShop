import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { BannerType } from "@/type/Types";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Banner = () => {
  const [banners, setBanners] = useState<BannerType[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/banners").then((res) => {
      setBanners(res.data);
    });
  }, []);

  const handleNext = () => {
    if (banners.length === 0) return;
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    if (banners.length === 0) return;
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="z-0 relative w-full max-w-8xl mx-auto mt-4 h-[250px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg group">
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 z-20 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition"
        >
          <ArrowLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 z-20 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition"
        >
          <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {banners.length > 0 ? (
          <div
            key={banners[current].id}
            className="w-full h-full transition-all duration-700 ease-in-out relative"
          >
            <Image
              src={banners[current].imageUrl}
              alt={banners[current].title}
              width={1200}
              height={400}
              className="object-contain w-full h-full rounded-2xl"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 rounded-2xl flex items-end px-6 pb-6">
              <h2 className="text-white text-xl md:text-3xl font-bold">
                {banners[current].title}
              </h2>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-white bg-gray-800 rounded-2xl">
            <p>Loading banners...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
