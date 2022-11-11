const inStockFunction = (state, data) => {
  if (state.inStock) {
    return data.filter((item) => item.inStock);
  }
  return data;
};

const fastdeliveryFunction = (state, data) => {
  if (state.fastdelivery) {
    return data.filter((item) => item.fastdelivery);
  }
  return data;
};
const priceRangeFunction = (state, data) => {
  if (state.priceRange) {
    return data.filter((item) => Number(item.price) <= state.priceRange);
  }
  return data;
};

const categoryFunction = (state, data) => {
  if (state.category.length !== 0) {
    return data.filter((item) => state.category.includes(item.categoryName));
  }
  return data;
};

const ratingFunction = (state, data) => {
  if (state.rating) {
    return data.filter((item) => Number(item.rating) >= state.rating);
  }
  return data;
};

const brandFilter = (state, data) => {
  if (state.brandname.length !== 0) {
    return data.filter((item) => state.brandname.includes(item.title));
  }
  return data;
};
const sortByFilter = (state, data) => {
  if (state.sortBy) {
    return data.sort((a, b) =>
      state.sortBy === "PRICE_LOW_TO_HIGH" ? a.price - b.price : b.price - a.price
    );
  }
  return data;
};

const searchFilter = (state, data) => {
  if (state.search) {
    return data.filter(
      (item) =>
        item.title.toLowerCase().includes(state.search) ||
        item.categoryName.toLowerCase().includes(state.search) ||
        item.description.toLowerCase().includes(state.search)
    );
  }
  return data;
};

const composeFunction =
  (...args) =>
  (state, data) =>
    args.reduce((accumulator, current) => current(state, accumulator), data);

export {
  inStockFunction,
  fastdeliveryFunction,
  priceRangeFunction,
  categoryFunction,
  ratingFunction,
  brandFilter,
  sortByFilter,
  searchFilter,
  composeFunction,
};
