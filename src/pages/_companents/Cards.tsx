'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardsDataType } from "@/type/Types";
import ProductCard from "@/companents/ProductCard";
import Loading from "./Loading";

function Cards() {
  const [products, setProducts] = useState<CardsDataType[]>([]);

  useEffect(() => {
    axios
      .get("https://nt.softly.uz/api/front/products?page=1&limit=10")
      .then((res) => {
        setProducts(res.data.items);
      })
      .catch((err) => {
        alert("Xatolik: " + err);
      });
  }, []);

  if (!products.length) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-12 ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
