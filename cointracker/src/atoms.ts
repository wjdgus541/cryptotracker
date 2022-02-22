import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const scrollYValue = atom({
  key: "scrollYValue",
  default: 0,
});
