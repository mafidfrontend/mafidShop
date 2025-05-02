"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardsDataType, CategoriesProductIdTYpe } from "@/type/Types";
import ProductCard from "@/companents/ProductCard";
import Loading from "./Loading";
import PaginationControls from "./PaginationControls";

function Cards() {
    const [products, setProducts] = useState<CategoriesProductIdTYpe>();
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
                setProducts(res.data);
                setIsLoading(false);
            });
    }, [page]);

    if (isLoading) return <Loading />;

    const totalPages = Math.ceil((products?.totalItems || 0) / limit);

    return (
        <div className="container mx-auto px-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products?.items.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}
            </div>

            <PaginationControls
                currentPage={page}
                totalPages={totalPages}
                hrefBuilder={(page) => `/products?page=${page}`}
            />
        </div>
    );
}

export default Cards;
