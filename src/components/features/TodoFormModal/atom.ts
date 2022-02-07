import { atom } from "recoil";

export const todoFromModalOpenState = atom<boolean>({
  key: "todoFromModalOpenState",
  default: false,
});
