'use client'
import Image from "next/image";
import savat from "../assets/icons/shop.svg";
import Link from "next/link";
import { CardsDataType } from "@/type/Types";

function ProductCard({ item }: { item?: CardsDataType }) {
  if (!item) {
    return (
      <div className="text-red-500">Mahsulot ma'lumotlari mavjud emas.</div>
    );
  }

  return (
    <div className="bg-white mt-12 shadow-md rounded-lg p-4 max-w-[250px] mb-5 flex flex-col justify-between">
        <Link href={`/pradakt/${item.id}`}>
      <div>
          {item.imageUrl ? (
            <Image
              width={230}
              height={260}
              src={item.imageUrl}
              alt={item.name || "Mahsulot"}
              className="mx-auto rounded-lg object-cover h-70 w-full"
            />
          ) : (
            <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
              <p className="text-gray-500">Rasm yo‘q</p>
            </div>
          )}
        <p className="text-gray-700 text-sm line-clamp-2">
          {item.description || "Tavsif mavjud emas"}
        </p>
      </div>
        </Link>
      <div className="mt-4">
        <div className="flex justify-between items-center mt-3">
          <p className="text-lg font-semibold text-gray-900">
            {item.price ? `$${item.price}` : "Narx noma’lum"}
          </p>
          <button className="border-2 border-blue-500 p-2 rounded-md hover:bg-blue-800 hover:text-white transition">
            <Image width={30} height={30} src={savat} alt="savat" />
          </button>
        </div>
      </div>
        </div>

  );
}

export default ProductCard;
