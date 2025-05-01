import React, { useState } from "react";
import yurak from "../../assets/icons/yurak.svg";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Image from "next/image";

function Favourites() {
    const [showFavorites, setShowFavorites] = useState(false);
    const favorites = useSelector((state: RootState) => state.favorites.items);

    return (
        <>
            <div
                className="flex flex-col items-center text-sm text-gray-800 cursor-pointer"
                onClick={() => setShowFavorites(true)}
            >
                <Image width={30} height={30} src={yurak} alt="yurak" />
                <p>Sevimlilar</p>
            </div>
            {showFavorites && (
                <div className="absolute top-20 right-36 bg-white shadow-lg rounded-xl p-4 w-72 z-50">
                    <h3 className="font-semibold text-lg mb-2">Sevimlilar</h3>
                    {favorites.length === 0 ? (
                        <p>Hech narsa yo‘q</p>
                    ) : (
                        <ul>
                            {favorites.map((item) => (
                                <li
                                    key={item.id}
                                    className="mb-2 border-b pb-2"
                                >
                                    <p className="font-medium">{item.name}</p>
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
        </>
    );
}

export default Favourites;
