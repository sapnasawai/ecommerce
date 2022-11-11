import React, { useState } from "react";
import { Header } from "../Header/Header.jsx";
import { Filter } from "./Filter.jsx";
import { ProductCard } from "./ProductCard.jsx";
import { useFilters } from "../../Context/FilterContext.jsx";
import { useProducts } from "../../Context/ProductsContext.jsx";
import "./CSS/ProductsPage.css";
import {
  inStockFunction,
  fastdeliveryFunction,
  priceRangeFunction,
  categoryFunction,
  ratingFunction,
  brandFilter,
  sortByFilter,
  searchFilter,
  composeFunction,
} from "../../Utils/FilteredProducts.js";

export const ProductsPage = () => {
  const [filterDrawer, setFilterDrawer] = useState(false);
  const { state } = useFilters();
  const { productsState } = useProducts();
  const { products } = productsState;

  const productsData = composeFunction(
    inStockFunction,
    fastdeliveryFunction,
    priceRangeFunction,
    categoryFunction,
    ratingFunction,
    brandFilter,
    sortByFilter,
    searchFilter
  )(state, products);

  return (
    <div>
      <Header />
      <div className="filter-sidebar">
        <Filter />
      </div>
      <div className="main-wrapper">
        {productsData.length !== 0 ? (
          productsData.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <h2>No products to display</h2>
        )}
        <div
          className="mobile-filters flex-center"
          onClick={() => setFilterDrawer(!filterDrawer)}
        >
          Filters
        </div>
      </div>
      {filterDrawer && (
        <div className="mob-filter-drawer">
          <Filter />
        </div>
      )}
    </div>
  );
};
