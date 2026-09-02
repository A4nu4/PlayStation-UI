import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

// static readonly TOP_MENU = "1";
//   static readonly DETAILS = "↓";
//   static readonly NAV_RIGHT = "➔";
//   static readonly NAV_LEFT = "←";

export const hotKeysData = [
  {
    icon: <ArrowUp />,
    label: "TOP MENU",
  },
  {
    icon: (
      <>
        <ArrowDown />
        {""}
      </>
    ),
    label: "DETAILS",
  },
  {
    icon: (
      <>
        <ArrowLeft />
      </>
    ),
    label: "PREV GAME",
  },
  {
    icon: (
      <>
        <ArrowRight />
      </>
    ),
    label: "NEXT GAME",
  },
];

export type THotKeysData = (typeof hotKeysData)[number];
