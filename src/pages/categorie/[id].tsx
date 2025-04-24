"use client";
import ProductCard from "@/companents/ProductCard";
import Loading from "@/pages/_companents/Loading";
import { CategoriesProductIdTYpe } from "@/type/Types";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PaginationControls from "../_companents/PaginationControls";

function Categories() {
  const [categoriaId, setCategoriaId] = useState<CategoriesProductIdTYpe | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { query } = useRouter();
  const limit = 10;

  useEffect(() => {
    if (!query.id) return;
    axios
      .get(
        `https://nt.softly.uz/api/front/products?categoryId=${query.id}&page=${currentPage}&limit=${limit}`
      )
      .then((res) => {
        setCategoriaId(res.data);
      })
      .catch((error) => {
        console.error("API dan xatolik:", error);
      });
  }, [query.id, currentPage]);

  if (!categoriaId) return <Loading />;

  if (!categoriaId.items || categoriaId.items.length === 0)
    return <div className="text-center text-4xl mt-10">Ma’lumot yo‘q</div>;

  const totalPages = Math.ceil((categoriaId.totalItems || 0) / limit);

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-32 mt-3">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categoriaId.items.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Categories;