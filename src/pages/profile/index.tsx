"use client";
import React from "react";
import Image from "next/image";
import user from "@/assets/icons/user.svg";

const ProfilePage = () => {

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
        </div>
    );
};

export default ProfilePage;
