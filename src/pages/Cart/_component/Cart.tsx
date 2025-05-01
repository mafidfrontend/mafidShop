"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toast } from "sonner";
import { clearCart, removeFromCart } from "@/store/slices/cartSlice";
import axios from "axios";
import { addOrder } from "@/store/slices/ordersSlice";

function Cart() {
    const orders = useSelector((state: RootState) => state.orders.list);
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleDelete = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleCheckout = () => {
        if (items.length === 0) {
            toast.warning("Savat bo‘sh");
            return;
        }

        toast.loading("Buyurtma yuborilmoqda...");

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const address = `Latitude: ${latitude}, Longitude: ${longitude}`;

                const token = localStorage.getItem("authToken");

                const requestBody = {
                    address,
                    items: items.map((item) => ({
                        productId: item.id,
                        quantity: item.stock,
                    })),
                };

                axios
                    .post(
                        "https://nt.softly.uz/api/front/orders",
                        requestBody,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    )
                    .then(() => {
                        toast.success("Buyurtma muvaffaqiyatli yuborildi");
                        setTimeout(
                            () => toast.info("Buyurtma yuborishga chiqarildi"),
                            2000
                        );
                        setTimeout(
                            () => toast.success("Buyurtma qabul qilindi"),
                            4000
                        );

                        items.forEach((item) => {
                            dispatch(
                                addOrder({
                                    id: item.id,
                                    name: item.name,
                                    price: item.price,
                                    imageUrl: item.imageUrl,
                                })
                            );
                        });

                        dispatch(clearCart());
                    })
                    .catch(() => {
                        toast.error("Buyurtma yuborishda xatolik");
                    });
            },
            () => {
                toast.error("Geolokatsiya olinmadi");
            }
        );
    };

    return (
        <div className="max-w-screen-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Savat</h1>
            {items.length === 0 ? (
                <p className="text-gray-600">Savat hozircha bo‘sh</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className="border-b pb-4 flex justify-between items-center"
                            >
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-600">
                                        {item.price} so‘m
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="text-red-500 hover:underline text-sm"
                                >
                                    O‘chirish
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 text-right">
                        <button
                            onClick={handleCheckout}
                            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                        >
                            Buyurtma berish
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
