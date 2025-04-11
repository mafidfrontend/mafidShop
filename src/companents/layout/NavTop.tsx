import React from "react";
import Image from "next/image";
import lokation from "../../assets/images/lokation.svg";

const NavTop = () => {
  return (
    <div className="bgCloor text-white py-2 text-sm">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center gap-2">
            <Image width={20} height={20} src={lokation} alt="Lokatsiya" />
            <span className="font-semibold">Toshkent</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 text-center">
            <p className="hover:underline hover:text-blue-300 transition cursor-pointer">
              Bizning do'konlarimiz
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md text-white text-sm transition-all">
              Yuridik shaxslar uchun
            </button>
            <p className="hover:underline hover:text-blue-300 transition cursor-pointer">
              To'lov usullari
            </p>
          </div>

          <div className="text-center md:text-right text-xs md:text-sm">
            <p>
              Aloqa markazi:{" "}
              <a
                href="tel:+998909992800"
                className="underline hover:text-blue-300 transition"
              >
                +998 90 999 28 00
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;