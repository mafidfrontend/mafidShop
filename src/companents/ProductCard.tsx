"use client";
import Image from "next/image";
import savat from "../assets/icons/shop.svg";
import Link from "next/link";
import { CardsDataType } from "@/type/Types";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import { Heart } from "lucide-react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { toggleFavorite } from "@/store/slices/favoritesSlice";
import { toast } from "sonner";

function ProductCard({ item }: { item?: CardsDataType }) {
    if (!item) {
        return (
            <div className="text-red-500">
                Mahsulot ma'lumotlari mavjud emas.
            </div>
        );
    }

    const dispatch = useDispatch();

    const favorites = useSelector((state: RootState) => state.favorites.items);
    const isFavorite = favorites.some((fav) => fav.id === item.id);

    return (
        <>
            <div className="bg-white mt-12 shadow-md rounded-lg p-4 max-w-[250px] mb-5 flex flex-col justify-between relative">
                <Link href={`/product/${item.id}`}>
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
                            {item.name || "Tavsif mavjud emas"}
                        </p>
                    </div>
                </Link>
                <div className="mt-4">
                    <div className="flex justify-between items-center mt-3">
                        <p className="text-lg font-semibold text-gray-900">
                            {item.price ? `$${item.price}` : "Narx noma’lum"}
                        </p>
                        <button
                            onClick={() => {
                                dispatch(addToCart(item))
                                toast.success(`${item.name} savatga qo'shildi!`);
                            }}
                            className="border-2 border-blue-500 p-2 rounded-md hover:bg-blue-800 hover:text-white transition"
                        >
                            <Image
                                width={30}
                                height={30}
                                src={savat}
                                alt="savat"
                            />
                        </button>
                        <div className="absolute top-3 right-3">
                            <button
                                onClick={() => {
                                    dispatch(toggleFavorite(item))
                                    if (!isFavorite) {
                                        toast.success(`${item.name} sevimlilarga qo'shildi`);
                                    } else {
                                        toast.info(`${item.name} sevimlilardan olib tashlandi`);
                                    }

                                }}
                                className={`p-2 rounded-md transition ${
                                    isFavorite
                                        ? "bg-red-500 text-white"
                                        : "border-red-500 hover:bg-red-500 hover:text-white"
                                }`}
                            >
                                <Heart
                                    size={20}
                                    fill={isFavorite ? "white" : "none"}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
