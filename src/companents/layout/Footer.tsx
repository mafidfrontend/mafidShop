import Image from "next/image";
import React from "react";
import telegram from "../../assets/icons/telegram.svg";
import instagram from "../../assets/icons/instagram.svg";
import yotube from "../../assets/icons/yotube.svg";

function Footer() {
    return (
        <footer className="bgCloor text-white py-10">
            <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                <div className="flex flex-col gap-4">
                    <p>Savolingiz bormi? Qo'ng'iroq qiling</p>
                    <a
                        href="tel:+998909992800"
                        className="hover:text-blue-300 text-2xl font-bold"
                    >
                        +998 90 999 28 00
                    </a>
                    <div className="flex gap-3">
                        <Image
                            width={40}
                            height={40}
                            src={telegram}
                            alt="Telegram"
                        />
                        <Image
                            width={40}
                            height={40}
                            src={instagram}
                            alt="Instagram"
                        />
                        <Image
                            width={40}
                            height={40}
                            src={yotube}
                            alt="YouTube"
                        />
                    </div>
                    <p className="font-semibold underline cursor-pointer">
                        Do'konlar manzillari
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl mb-2">Kompaniya</h2>
                    <p className="hover:underline cursor-pointer">
                        Yuridik shaxslar uchun
                    </p>
                    <p className="hover:underline cursor-pointer">
                        Biz haqimizda
                    </p>
                    <p className="hover:underline cursor-pointer">
                        Yangiliklar va bloglar
                    </p>
                    <p className="hover:underline cursor-pointer">
                        IMEI ni tekshirish
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl mb-2">Ma'lumot</h2>
                    <p className="hover:underline cursor-pointer">
                        Bepul yetkazib berish
                    </p>
                    <p className="hover:underline cursor-pointer">
                        Texnomartda ishlash
                    </p>
                    <p className="hover:underline cursor-pointer">
                        Shaxsiy kabinet
                    </p>
                    <p className="hover:underline cursor-pointer">
                        Aloqa raqamlari
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl mb-2">
                        Xaridorga yordam
                    </h2>
                    <p className="hover:underline cursor-pointer">
                        Mahsulotni qaytarish
                    </p>
                    <p className="hover:underline cursor-pointer">
                        Mahsulotlar uchun kafolat
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl mb-2">
                        Ilovani yuklab olish
                    </h2>
                    <p className="text-sm text-gray-300">
                        Tez orada mavjud bo'ladi
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;