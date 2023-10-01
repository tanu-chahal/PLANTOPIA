import { atom, selector } from "recoil";

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
