import { ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";

function Katalogkatkatalog({
  katalog,
  setKatalog,
}: {
  katalog: boolean;
  setKatalog: (value: boolean) => void;
}) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (katalog) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 300);
    }
  }, [katalog]);

  return (
    <>
      {showModal && (
        <div
          onClick={() => setKatalog(false)}
          className="fixed inset-0 bg-black/30 z-40 cursor-pointer"
        />
      )}

      <div
        className={`fixed inset-x-0 top-24 z-50 mx-auto max-w-7xl rounded-2xl bg-white p-6 shadow-lg transition-opacity duration-300 ${
          katalog ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3 border border-blue-600 rounded-xl px-4 py-3 w-fit mb-6">
          <ShoppingBag className="w-6 h-6 text-blue-800" />
          <h1 className="text-blue-800 text-2xl font-bold">
            MAFID<span className="text-yellow-400">_shop</span>
          </h1>
        </div>

        <div className="flex gap-6">
          <div className="w-72 h-[400px] space-y-2 overflow-y-auto pr-2 border-r border-gray-200">
            {[
              "Televizorlar, audio va video texnika",
              "Noutbuk, planshet va kompyuterlar",
              "Telefonlar, gadjetlar, aksessuarlar",
              "Maishiy texnika",
              "Oshxona uchun",
              "Sport anjomlari",
              "Go'zallik va salomatlik",
              "Chet eldan mahsulotlar",
              "Avto jihozlar",
              "Ofis va bog' uchun",
              "Bolalar mahsulotlari",
              "Kiyimlar va poyabzallar",
              "Kitoblar",
              "Mebel",
              "Ta'mirlash va qurilish",
              "Kantselyariya tovarlari",
              "Elektrotransport",
              "Sovg'alar va suvenirlar",
              "Aqlli uy texnologiyalari",
              "Maxsus takliflar",
              "Oziq-ovqat mahsulotlari",
              "Avtomobillar",
            ].map((item, idx) => (
              <p
                key={idx}
                className="hover:text-blue-600 text-sm text-gray-800 cursor-pointer transition"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 overflow-y-auto max-h-[400px] pr-2">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <p className="font-semibold text-lg mb-3">Televizorlar</p>
                {[
                  "Toshiba",
                  "Artel",
                  "Shivaki",
                  "Vesta",
                  "Sony",
                  "Premier",
                  "Samsung",
                  "LG",
                  "Hisense",
                  "Immer",
                  "Ziffler",
                  "TCL",
                  "Xiaomi",
                  "Skyworth",
                  "Avalon",
                  "Rulls",
                  "Moonx",
                ].map((brand, index) => (
                  <p key={index} className="text-sm text-gray-600 hover:text-blue-700 cursor-pointer">
                    {brand}
                  </p>
                ))}

                <p className="font-semibold text-lg mt-5 mb-3">Audio</p>
                {["Musiqa sistemalari", "Akustika", "Mikrofonlar"].map((audio, index) => (
                  <p key={index} className="text-sm text-gray-600 hover:text-blue-700 cursor-pointer">
                    {audio}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Katalogkatkatalog;