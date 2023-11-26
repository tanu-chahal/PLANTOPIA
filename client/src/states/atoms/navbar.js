import { atom } from "recoil";

export const menuState = atom({
  key: "menuState",
  default: false,
});

export const activePage = atom({
    key: "activePage",
    default: "/",
  });
  