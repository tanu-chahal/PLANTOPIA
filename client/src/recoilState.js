import { atom, selector } from "recoil";
import { plants } from "./utils/data.js";

export const menuState = atom({
  key: "menuState",
  default: false,
});

export const activePage = atom({
  key: "activePage",
  default: "/",
});

export const activeReview = atom({
  key: "activeReview",
  default: 0,
});

export const productListFilterState = atom({
  key: "productListFilterState",
  default: "All",
});

export const productListPriceState = atom({
  key: "productListPriceState",
  default: 2000,
});

export const productListSortState = atom({
  key: "productListSortState",
  default: 'sales',
});


export const filteredProductListState = selector({
  key: "FilteredProductList",
  get: ({ get }) => {
    const filter = get(productListFilterState);
    const priceFilter = get(productListPriceState);
    const sortFilter = get(productListSortState);
    const list = [...plants];
    const sortedPlants = list.filter((plant) => filter !== "All" ? plant.category === filter : plant.category !== null).filter(p => p.price <= priceFilter);
    if (sortFilter === 'rating') {
      sortedPlants.sort((a, b) => b.rating - a.rating);
    } else if (sortFilter === 'price') {
      sortedPlants.sort((a, b) => a.price - b.price);
    }
    else if (sortFilter === 'sales') {
      sortedPlants.sort((a, b) => b.sales - a.sales);
    }
    return sortedPlants;
  },
});


