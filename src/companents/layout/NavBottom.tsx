'use client'
import { TopCategoriesType } from "@/type/Types";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function NavBottom() {
  const [topKatigories, setTopKAtigorues] = useState<TopCategoriesType[]>([]);

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/categories").then((res) => {
      setTopKAtigorues(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="container m-auto pt-6">
      <div className="flex gap-4 md:gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {topKatigories?.map((item) => (
          <Link
            key={item.id}
            href={`/categorie/${item.id}`}
            className=" m-auto text-gray-800 rounded-md  transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBottom;
