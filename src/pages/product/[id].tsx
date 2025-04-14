import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "../_companents/Loading";
import Cards from "../_companents/Cards";
import { ProductIdType } from "@/type/Types";
import { useRouter } from "next/router";

function Product() {
  const [produktId, setProduktId] = useState<ProductIdType | null>(null);
  const params = useRouter();
  const id = params.query;

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://nt.softly.uz/api/front/products/${id}`)
      .then((res) => {
        setProduktId(res.data);
      })
      .catch((e) => {
        console.error("Xatolik:", e);
      });
  }, [id]);

  if (!produktId) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            width={400}
            height={400}
            src={produktId.imageUrl}
            alt={produktId.name}
            className="rounded-2xl shadow-lg object-cover max-w-full"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {produktId.name}
          </h1>
          <p className="text-gray-700 mb-4 text-base leading-relaxed">
            {produktId.description}
          </p>

          <p className="text-2xl font-semibold text-green-600 mb-2">
            ${produktId.price}
          </p>

          <p
            className={`font-medium ${
              produktId.stock > 0 ? "text-blue-600" : "text-red-600"
            }`}
          >
            {produktId.stock > 0 ? "Sotuvda mavjud" : "Sotuvda yo‘q"}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-2 bg-amber-500 text-white rounded-2xl hover:bg-amber-600 transition shadow">
              Xarid qilish
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-2xl hover:bg-gray-300 transition shadow">
              Savatga qo‘shish
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Cards />
      </div>
    </div>
  );
}

export default Product;
