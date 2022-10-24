import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "../products/ProductCard";
import FilterProduct from "./FilterProduct";
import { useSearchParams } from "react-router-dom";

import { Pagination } from "@mui/material";


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
  //pagination

  const [page, setPage] = useState(1);
  const itemsOnPage = 6;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e,p) => {
    setPage(p)
  };


  function currentData(){
    const begin = (page-1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end)
  }

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
         currentData().map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <h3>loading...</h3>
        
      )}
      <br /><br />
      <Pagination count={count} page={page} onChange={handlePage} />
    </div>
  );
};

export default ProductList;