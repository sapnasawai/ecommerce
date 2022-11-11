import React from "react";
import "./CSS/Filter.css";
import { useFilters } from "../../Context/FilterContext";
import { FILTER_BY_BRANDNAME, FILTER_BY_CATEGORY, FILTER_BY_DELIVERY, FILTER_BY_PRICE_RANGE, FILTER_BY_RATING, FILTER_BY_STOCK, SORT_BY } from "../../Constants/FilterConstants";

const Categories = ["Analog", "Digital", "Analog-Digital"];

const ratings = [4, 3, 2, 1];

const brandnames = ["Casio", "Fastrack", "Fossil", "Titan"];

export const Filter = () => {
  const { state, dispatch } = useFilters();
  const {
    inStock,
    fastdelivery,
    priceRange,
    category,
    rating,
    brandname,
    sortBy,
  } = state;

  return (
    <div className="filter-wrapper flex-column">
      <div className="filter-title">
        <h4>Filters</h4>
        <h4 className="text-primary cursor-pointer" onClick={() => dispatch({ type: "CLEAR_ALL" })}>Clear</h4>
      </div>
      <div>
        <div className="flex-column gap-xs">
          <div className="input-checkbox">
            <input
              type="checkbox"
              id="FILTER_BY_STOCK"
              name="FILTER_BY_STOCK"
              checked={inStock}
              onChange={() =>
                dispatch({ type: FILTER_BY_STOCK })
              }
            />
            <label className="cursor-pointer" htmlFor="FILTER_BY_STOCK">In Stock Only</label>
          </div>
        </div>
      </div>
      <div className="flex-column gap-xs margin-b-sm">
                <div className="input-checkbox">
                  <input
                    type="checkbox"
                    id= "FILTER_BY_DELIVERY"
                    name="FILTER_BY_DELIVERY"
                    checked={fastdelivery}
                    onChange={() =>
                      dispatch({ type: FILTER_BY_DELIVERY})
                    }
                  />
                  <label htmlFor="FILTER_BY_DELIVERY">Fast Delivery Only</label>
                </div>
              </div>
      <div className="margin-b-sm">
        <label className="cursor-pointer" htmlFor="price">Price Range : 0 to {priceRange}</label>
        <input
          className="slider"
          type="range"
          min="0"
          max="10000"
          step="2000"
          value={priceRange}
          onChange={(e) =>
            dispatch({ type: FILTER_BY_PRICE_RANGE, payload: e.target.value })
          }
        />
      </div>
      <div className="margin-b-sm">
        <h4>Category</h4>
        {Categories.map((categoryType, index) => {
          return (
            <div className="form-wrapper flex-column " key={index}>
              <div className="input-radio">
                <input
                  type="checkbox"
                  id={categoryType}
                  name="category"
                  checked={category.includes(categoryType.toLowerCase())}
                  onChange={() =>
                    dispatch({
                      type: FILTER_BY_CATEGORY,
                      payload: categoryType.toLowerCase(),
                    })
                  }
                />
                <label className="cursor-pointer" htmlFor={categoryType}>{categoryType}</label>
              </div>
            </div>
          );
        })}
      </div>
      <div className="margin-b-sm">
        <h4>Rating</h4>
        {ratings.map((ratingValue, index) => {
          return (
            <div className="flex-column gap-xs" key={index}>
              <div className="input-checkbox">
                <input
                  type="radio"
                  id={ratingValue}
                  name="ratings"
                  checked={rating===ratingValue}
                  onChange={() =>
                    dispatch({ type: FILTER_BY_RATING, payload: ratingValue })
                  }
                />
                <label className="cursor-pointer" htmlFor={ratingValue}>{ratingValue} star & above</label>
              </div>
            </div>
          );
        })}
      </div>
      <div className="margin-b-sm">
        <h4>By Brand Name</h4>
        {brandnames.map((brand, index) => {
          return (
            <div className="flex-column gap-xs" key={index}>
              <div className="input-checkbox">
                <input
                  type="checkbox"
                  id={brand}
                  name="brandnames"
                  checked={brandname.includes(brand.toLowerCase())}
                  onChange={() =>
                    dispatch({ type: FILTER_BY_BRANDNAME, payload: brand.toLowerCase() })
                  }
                />
                <label className="cursor-pointer" htmlFor={brand}>{brand}</label>
              </div>
            </div>
          );
        })}
      </div>
        <h4>Sort by</h4>
        <div className="flex-column gap-xs">
          <div className="input-radio">
            <input
              type="radio"
              id="PRICE_LOW_TO_HIGH"
              name="sortBy"
              checked={sortBy === "PRICE_LOW_TO_HIGH"}
              onChange={() =>
                dispatch({ type: SORT_BY, payload: "PRICE_LOW_TO_HIGH" })
              }
            />
            <label className="cursor-pointer" htmlFor="PRICE_LOW_TO_HIGH">Price: Low-to-High</label>
          </div>
        </div>
        <div className="flex-column gap-xs">
          <div className="input-radio">
            <input
              type="radio"
              id="PRICE_HIGH_TO_LOW"
              name="sortBy"
              checked={sortBy === "PRICE_HIGH_TO_LOW"}
              onChange={() =>
                dispatch({ type: SORT_BY, payload: "PRICE_HIGH_TO_LOW" })
              }
            />
            <label className="cursor-pointer" htmlFor="PRICE_HIGH_TO_LOW">Price: High-to-Low</label>
          </div>
        </div>
      </div>
  );
};
