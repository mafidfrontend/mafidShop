import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function index() {
    const orders = useSelector((state: RootState) => state.orders.list);
    return (
        <div className="max-w-screen-md mx-auto mt-10 mb-10 p-6 bg-white shadow rounded-xl">
            <h3 className="text-lg font-medium mb-2">Xaridlar tarixi</h3>
            {orders.length === 0 ? (
                <p className="text-gray-600">
                    Hozircha hech qanday xarid qilinmagan.
                </p>
            ) : (
                <ul className="space-y-4">
                    {orders.map((order) => (
                        <li key={order.id} className="flex items-center gap-4">
                            <Image
                                src={order.imageUrl}
                                alt={order.name}
                                width={60}
                                height={60}
                                className="rounded-lg"
                            />
                            <div>
                                <p className="font-semibold">{order.name}</p>
                                <p className="text-green-600">${order.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default index;
