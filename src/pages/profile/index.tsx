"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import user from "@/assets/icons/user.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import axios from "axios";
import { Order1 } from "@/type/Types";
import PaginationControls from "../_companents/PaginationControls";

const ProfilePage = () => {
    const userAbout = useSelector((state: RootState) => state.authSlice.user);
    const [orders, setOrders] = useState<Order1[]>([]);
    const [page, setPage] = useState(1);
    const limit = 10;

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        axios
            .get(
                `https://nt.softly.uz/api/front/orders?limit=${limit}&page=${page}&order=ASC&status=pending`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => {
                setOrders(res.data.items);
            })
            .catch((err) => console.error(err));
    }, [page]);
    const totalPages = limit;

    return (
        <div className="max-w-6xl mx-auto p-6 mt-10 mb-10">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center">
                    <Image
                        src={user}
                        alt="User avatar"
                        width={80}
                        height={80}
                        className="rounded-full"
                    />
                    <p className="text-gray-500">
                        {userAbout ? userAbout.name : "User"}
                    </p>
                    <div className="mt-6 w-full">
                        <h3 className="text-lg font-medium mb-2 border-b pb-1">
                            Shaxsiy ma'lumotlar
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700 mt-2">
                            <li>
                                <span className="font-medium">Email:</span>{" "}
                                {userAbout ? userAbout.name : "Noma'lum"}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">
                        Sotib olingan mahsulotlar
                    </h2>
                    {orders.length === 0 ? (
                        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-500">
                            Hali mahsulot xarid qilinmagan
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {orders.map((order) => (
                                <div
                                    key={order.id}
                                    className="bg-white shadow rounded-xl p-4"
                                >
                                    <p className="font-semibold text-gray-700">
                                        Buyurtma ID: {order.id}
                                    </p>
                                    <p className="text-sm text-gray-500 mb-2">
                                        Sana:{" "}
                                        {new Date(
                                            order.createdAt
                                        ).toLocaleString()}
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                        {order.items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex gap-4 border p-3 rounded-lg items-center"
                                            >
                                                <img
                                                    src={item.product.imageUrl}
                                                    alt={item.product.name}
                                                    className="w-16 h-16 object-cover rounded"
                                                />
                                                <div>
                                                    <p className="font-medium">
                                                        {item.product.name}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        {item.quantity} dona ×{" "}
                                                        {item.price} so'm
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-right text-gray-700 font-bold">
                                        Jami: {order.totalPrice} so'm
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                    <PaginationControls currentPage={page} totalPages={totalPages} onPageChange={setPage}  />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
