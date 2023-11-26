import {atom} from 'recoil'

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
  