"use client";
import React from "react";
import Image from "next/image";
import user from "@/assets/icons/user.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ProfilePage = () => {
    const orders = useSelector((state: RootState) => state.orders.list);
    const userAbout = localStorage.getItem("username")

    return (
        <div className="max-w-6xl mx-auto p-6 mt-10 mb-10">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center">
                    <Image src={user} alt="User avatar" width={80} height={80} className="rounded-full" />
                    <p className="text-gray-500">{userAbout ? userAbout : "User"}</p>
                    <div className="mt-6 w-full">
                        <h3 className="text-lg font-medium mb-2 border-b pb-1">Shaxsiy ma'lumotlar</h3>
                        <ul className="text-sm space-y-1 text-gray-700 mt-2">
                            <li><span className="font-medium">Email:</span>{userAbout ? userAbout : "User"}</li>
                        </ul>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">Sotib olingan mahsulotlar</h2>
                    {orders.length === 0 ? (
                        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-500">
                            Hali mahsulot xarid qilinmagan
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {orders.map((item) => (
                                <div key={item.id} className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
                                    <p className="text-lg font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-600 mt-1">{item.price} so‘m</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;