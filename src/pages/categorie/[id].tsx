import ProductCard from "@/companents/ProductCard";
import PaginationControls from "@/companents/PaginationControls";
import { CategoriesPageProps } from "@/type/Types";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useState } from "react";

function Categories({
    initialData,
    categoryId,
    currentPage,
}: CategoriesPageProps) {
    const [categoriaId, setCategoriaId] = useState(initialData);
    const [current, setCurrent] = useState(currentPage);
    const limit = 10;

    const totalPages = Math.ceil((categoriaId.totalItems || 0) / limit);

    const handlePageChange = (page: number) => {
        axios
            .get(
                `https://nt.softly.uz/api/front/products?categoryId=${categoryId}&page=${page}&limit=${limit}`
            )
            .then((res) => {
                setCategoriaId(res.data);
                setCurrent(page);
            });
    };

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
            <PaginationControls
                currentPage={current}
                totalPages={totalPages}
                hrefBuilder={(page) => `/categories/${categoryId}?page=${page}`}
            />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = (context) => {
    const { id } = context.query;
    const page = parseInt((context.query.page as string) || "1", 10);
    const limit = 10;

    return axios
        .get(
            `https://nt.softly.uz/api/front/products?categoryId=${id}&page=${page}&limit=${limit}`
        )
        .then((res) => {
            return {
                props: {
                    initialData: res.data,
                    categoryId: id,
                    currentPage: page,
                },
            };
        })
        .catch(() => {
            return {
                props: {
                    initialData: { items: [], totalItems: 0 },
                    categoryId: id,
                    currentPage: page,
                },
            };
        });
};

export default Categories;
