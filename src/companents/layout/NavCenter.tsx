"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import menu from "../../assets/images/menu.svg";
import menu_x from "../../assets/icons/katalog_x.svg";
import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";
import yurak from "../../assets/icons/yurak.svg";
import shop from "../../assets/icons/shop.svg";
import KatalogMadal from "./KatalogMadal";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { CardsDataType } from "@/type/Types";
import axios from "axios";
import { useSelector } from "react-redux";

function NavCenter() {
    const [katalog, setKatalog] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    const favorites = useSelector((state: RootState) => state.favorites.items);
    const items = useSelector((state: RootState) => state.cart.items);
    const [produktId, setProduktId] = useState<CardsDataType>();
    const params = useRouter();
    useEffect(() => {
        if (!params.pathname) return;

        axios.get(`https://nt.softly.uz/api/front/products/`).then((res) => {
            setProduktId(res.data);
        });
    }, [params.pathname]);
    return (
        <div>
            <div className="max-w-screen-xl mx-auto pt-6 flex flex-wrap justify-between items-center gap-4 px-4 md:px-12">
                <Link href="/">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <ShoppingBag className="w-6 h-6 text-green-800" />
                        <h1 className="text-green-800 text-2xl md:text-3xl font-bold">
                            MAFID<span className="text-yellow-400">_shop</span>
                        </h1>
                    </div>
                </Link>

                <button
                    onClick={() => setKatalog(!katalog)}
                    className="bg-green-600 text-white px-5 py-2 rounded flex items-center gap-2 hover:bg-green-700 transition cursor-pointer"
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
                    <button className="bg-green-600 hover:bg-green-700 px-4 py-2 transition-colors text-white">
                        <Image
                            width={24}
                            height={24}
                            src={search}
                            alt="Qidirish"
                        />
                    </button>
                </div>

                <div className="flex gap-6">
                    <Dialog>
                        <DialogTrigger>
                            <div className="flex flex-col items-center text-sm text-gray-800 cursor-pointer">
                                <Image
                                    width={30}
                                    height={30}
                                    src={user}
                                    alt="user"
                                />
                                <p>Kirish</p>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-white">
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <label
                                        htmlFor="username"
                                        className="text-right"
                                    >
                                        Tahallusingiz
                                    </label>
                                    <input
                                        id="username"
                                        className="col-span-3 border border-b-black"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <label
                                        htmlFor="password"
                                        className="text-right"
                                    >
                                        Maxfiy so'zingiz
                                    </label>
                                    <input
                                        id="password"
                                        className="col-span-3 border border-b-black"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <button type="submit">Yuborish</button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <div
                        className="flex flex-col items-center text-sm text-gray-800 cursor-pointer"
                        onClick={() => setShowFavorites(true)}
                    >
                        <Image width={30} height={30} src={yurak} alt="yurak" />
                        <p>Sevimlilar</p>
                    </div>
                    {showFavorites && (
                        <div className="absolute top-20 right-36 bg-white shadow-lg rounded-xl p-4 w-72 z-50">
                            <h3 className="font-semibold text-lg mb-2">
                                Sevimlilar
                            </h3>
                            {favorites.length === 0 ? (
                                <p>Hech narsa yo‘q</p>
                            ) : (
                                <ul>
                                    {favorites.map((item) => (
                                        <li
                                            key={item.id}
                                            className="mb-2 border-b pb-2"
                                        >
                                            <p className="font-medium">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {item.price} so‘m
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <button
                                onClick={() => setShowFavorites(false)}
                                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                Yopish
                            </button>
                        </div>
                    )}
                    <div
                        className="flex flex-col items-center text-sm text-gray-800 cursor-pointer"
                        onClick={() => setShowCart(true)}
                    >
                        <Image width={30} height={30} src={shop} alt="shop" />
                        <p className="text-gray-800 rounded-2xl transition shadow">
                            Savatga qo‘shish
                        </p>
                    </div>
                    {showCart && (
                        <div className="absolute top-20 right-10 bg-white shadow-lg rounded-xl p-4 w-72 z-50">
                            <h3 className="font-semibold text-lg mb-2">
                                Savat
                            </h3>
                            {items.length === 0 ? (
                                <p>Savat bo‘sh</p>
                            ) : (
                                <ul>
                                    {items.map((item) => (
                                        <li
                                            key={item.id}
                                            className="mb-2 border-b pb-2"
                                        >
                                            <p className="font-medium">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {item.price} so‘m
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <button
                                onClick={() => setShowCart(false)}
                                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                Yopish
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <KatalogMadal katalog={katalog} setKatalog={setKatalog} />
        </div>
    );
}

export default NavCenter;
