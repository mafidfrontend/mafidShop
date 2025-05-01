"use client";
import { LucideTableProperties, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import user from "../../assets/icons/user.svg";
import React, { useEffect, useState } from "react";
import menu from "../../assets/images/menu.svg";
import menu_x from "../../assets/icons/katalog_x.svg";
import search from "../../assets/icons/search.svg";
import KatalogMadal from "./KatalogMadal";
import shop from "../../assets/icons/shop.svg";
import { KirishModal } from "../KirishModal";
import Favourites from "@/pages/_companents/Favourites";

function NavCenter() {
    const [katalog, setKatalog] = useState(false);

    return (
        <div>
            <div className="max-w-screen-xl mx-auto pt-6 flex items-start justify-between gap-4 px-4 md:px-12">
                <Link href="/">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <ShoppingBag className="w-6 h-6 text-green-800" />
                        <h1 className="text-green-800 text-2xl md:text-3xl font-bold">
                            MAFID
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
                    <KirishModal />
                    <Favourites />
                    <Link href="/Cart">
                        <div className="cursor-pointer flex items-center flex-col">
                            <Image
                                src={shop}
                                alt="shop"
                                width={30}
                                height={30}
                            />
                            <div>Savatcha</div>
                        </div>
                    </Link>
                </div>
                <Link href="/profile">
                    <div className="flex flex-col items-center text-sm text-gray-800 cursor-pointer">
                        <Image width={30} height={30} src={user} alt="user" />
                        <div>Profile</div>
                    </div>
                </Link>
            </div>
            <KatalogMadal katalog={katalog} setKatalog={setKatalog} />
        </div>
    );
}

export default NavCenter;