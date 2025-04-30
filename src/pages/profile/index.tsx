"use client";
import React from "react";
import Image from "next/image";
import user from "@/assets/icons/user.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ProfilePage = () => {
    
    const orders = useSelector((state: RootState) => state.orders.list);

    return (
        <div className="max-w-screen-md mx-auto mt-10 mb-10 p-6 bg-white shadow rounded-xl">
            <div className="flex items-center gap-4">
                <Image src={user} alt="user" width={60} height={60} />
                <div>
                    <h2 className="text-2xl font-semibold">
                        Foydalanuvchi Profil
                    </h2>
                    <p className="text-gray-600">user@example.com</p>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">
                    Shaxsiy ma'lumotlar
                </h3>
                <ul className="space-y-2">
                    <li>Ism: Abdulloh</li>
                    <li>Email: user@example.com</li>
                </ul>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Xaridlar tarixi</h3>
                {orders.length === 0 ? (
                    <p className="text-gray-600">
                        Hozircha hech qanday xarid qilinmagan.
                    </p>
                ) : (
                    <ul className="space-y-4">
                        {orders.map((order) => (
                            <li
                                key={order.id}
                                className="flex items-center gap-4"
                            >
                                <Image
                                    src={order.imageUrl}
                                    alt={order.name}
                                    width={60}
                                    height={60}
                                    className="rounded-lg"
                                />
                                <div>
                                    <p className="font-semibold">
                                        {order.name}
                                    </p>
                                    <p className="text-green-600">
                                        ${order.price}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
