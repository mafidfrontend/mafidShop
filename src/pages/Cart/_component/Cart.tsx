"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toast } from "sonner";
import { addToCart, clearCart, removeFromCart } from "@/store/slices/cartSlice";
import axios from "axios";
import { addOrder } from "@/store/slices/ordersSlice";
import { useRouter } from "next/router";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function Cart() {
    const router = useRouter();
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState("");

    const handleDecrease = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleCheckout = () => {
        if (items.length === 0) {
            toast.warning("Savat bo‘sh");
            return;
        }
        setOpen(true);
    };

    const handleConfirmOrder = () => {
        if (!address.trim()) {
            toast.warning("Iltimos, manzilni kiriting");
            return;
        }

        const token = localStorage.getItem("authToken");

        const requestBody = {
            address,
            items: items.map((item) => ({
                productId: item.id,
                quantity: item.count,
            })),
        };

        toast.info("Buyurtma yuborilmoqda...");

        axios
            .post("https://nt.softly.uz/api/front/orders", requestBody, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => {
                toast.success("Buyurtma muvaffaqiyatli yuborildi");

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
                setOpen(false);
                router.push("/profile");
            })
            .catch(() => {
                toast.error("Buyurtma yuborishda xatolik");
            });
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
                                        {item.price} $
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Soni: {item.count}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleDecrease(item.id)}
                                        className="text-red-500 hover:underline text-lg"
                                    >
                                        −
                                    </button>
                                    <button
                                        onClick={() =>
                                            dispatch(addToCart(item))
                                        }
                                        className="text-green-500 hover:underline text-lg"
                                    >
                                        +
                                    </button>
                                </div>
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
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Manzilni kiriting</DialogTitle>
                        <DialogDescription>
                            Buyurtma qayerga yetkazilishi kerakligini yozing
                        </DialogDescription>
                    </DialogHeader>
                    <Input
                        placeholder="Masalan: Toshkent, Chilonzor, 12-uy"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <DialogFooter>
                        <button
                            onClick={handleConfirmOrder}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Yuborish
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Cart;
