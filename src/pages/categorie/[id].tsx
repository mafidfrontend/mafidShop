"use client";
import ProductCard from "@/companents/ProductCard";
import Loading from "@/pages/_companents/Loading";
import { CategoriesProductIdTYpe } from "@/type/Types";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function NavbarPage() {
    const [categoriaId, setCategoriaId] =
        useState<CategoriesProductIdTYpe | null>(null);
    const { query } = useRouter();

    useEffect(() => {
        axios
            .get(`https://nt.softly.uz/api/products?page=${query}&limit=10`)
            .then((res) => {
                console.log(res.data);
                setCategoriaId(res.data);
            })
            .catch((error) => {
                console.error("API dan xatolik:", error);
            });
    }, [query]);
    if (!categoriaId) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    if (!categoriaId.items || categoriaId.items.length === 0) {
        return <div className="text-center text-4xl mt-10">Ma’lumot yo‘q</div>;
    }

    return (
        <div className="container mx-auto px-4 md:px-10 lg:px-32 mt-3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categoriaId.items.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default NavbarPage;
