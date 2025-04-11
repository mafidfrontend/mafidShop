import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menu from "../../assets/images/menu.svg";
import menu_x from "../../assets/icons/katalog_x.svg";
import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";
import yurak from "../../assets/icons/yurak.svg";
import shop from "../../assets/icons/shop.svg";
import KatalogMadal from "./KatalogMadal";

function NavCenter() {
  const [katalog, setKatalog] = useState(false);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto pt-6 flex flex-wrap justify-between items-center gap-4 px-4 md:px-12">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <ShoppingBag className="w-6 h-6 text-blue-800" />
            <h1 className="text-blue-800 text-2xl md:text-3xl font-bold">
              MAFID<span className="text-yellow-400">_shop</span>
            </h1>
          </div>
        </Link>

        <button
          onClick={() => setKatalog(!katalog)}
          className="bg-blue-600 text-white px-5 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition"
        >
          <Image
            width={25}
            height={25}
            src={katalog ? menu_x : menu}
            alt="katalog"
          />
          Katalog
        </button>

        <div className="flex items-center w-full max-w-lg border border-blue-600 rounded-lg bg-white overflow-hidden">
          <input
            className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
            type="text"
            placeholder="Qidirish..."
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 transition-colors text-white">
            <Image width={24} height={24} src={search} alt="Qidirish" />
          </button>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col items-center text-sm text-gray-800 cursor-pointer">
            <Image width={30} height={30} src={user} alt="user" />
            <p>Kirish</p>
          </div>
          <div className="flex flex-col items-center text-sm text-gray-800 cursor-pointer">
            <Image width={30} height={30} src={yurak} alt="yurak" />
            <p>Sevimlilar</p>
          </div>
          <div className="flex flex-col items-center text-sm text-gray-800 cursor-pointer">
            <Image width={30} height={30} src={shop} alt="shop" />
            <p>Savatcha</p>
          </div>
        </div>
      </div>

      <KatalogMadal katalog={katalog} setKatalog={setKatalog} />
    </div>
  );
}

export default NavCenter;