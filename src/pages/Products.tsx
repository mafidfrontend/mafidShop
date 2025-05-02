import { GetServerSideProps } from "next";
import { CardsDataType } from "@/type/Types";
import ProductCard from "@/companents/ProductCard";

type Props = {
    product: CardsDataType;
};

export default function ProductPage({ product }: Props) {
    return (
        <>
            <div className="flex justify-center">
                <ProductCard item={product} />
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;

    const res = await fetch(`https://nt.softly.uz/api/products/${id}/`);
    const item = await res.json();

    const product: CardsDataType = {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        imageUrl: item.imageUrl,
        categoryId: 1,
        createdAt: "",
        stock: 1,
        count: 1,
    };

    return {
        props: { product },
    };
};
