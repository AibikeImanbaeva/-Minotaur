import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "../products/ProductCard";
import FilterProduct from "./FilterProduct";
import { useSearchParams } from "react-router-dom";

import { Pagination } from "@mui/material/Pagination";


const ProductList = () => {
  const { products, getProducts } = useProducts();
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  console.log(search, "search");

  useEffect(() => {
    console.log(
      "сработал юз эффект для местного состояния установка параметров запроса"
    );
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    console.log(
      "сработал юзэфф который следит за изменением параметров апроса вызвана фукнция получения всех продуктов(с параметрами запроса)"
    );
    getProducts();
  }, [searchParams]);

  return (
    <div>
   
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      /> <br /> <br />

      <FilterProduct />
      {products ? (
        products.map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <h3>loading...</h3>
      )}
    </div>
  );
};

export default ProductList;