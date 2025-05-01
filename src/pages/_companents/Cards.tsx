"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardsDataType } from "@/type/Types";
import ProductCard from "@/companents/ProductCard";
import Loading from "./Loading";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Button } from "@/components/ui/button";

function Cards() {
    const [products, setProducts] = useState<CardsDataType[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const limit = 10;

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(
                `https://nt.softly.uz/api/front/products?page=${page}&limit=${limit}`
            )
            .then((res) => {
                setProducts(res.data.items);
            })
    }, [page]);

    const handleNext = () => setPage((prev) => prev + 1);
    const handlePrev = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    if (isLoading) return <Loading />;

    return (
        <div className="container mx-auto px-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-8 mb-8">
                <Button
                    onClick={handlePrev}
                    variant="outline"
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                    ⬅ Oldingi
                </Button>
                <span className="font-medium">Sahifa: {page}</span>
                <Button
                    variant="outline"
                    onClick={handleNext}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    Keyingi ➡
                </Button>
            </div>
        </div>
    );
}

export default Cards;
