import {selector} from 'recoil'
import {productListFilterState, productListPriceState, productListSortState } from '../atoms/product.js'
import { plants } from "../../utils/data.js";

export const filteredProductListState = selector({
    key: "filteredProductList",
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