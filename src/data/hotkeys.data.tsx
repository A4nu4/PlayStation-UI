import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

// static readonly TOP_MENU = "1";
//   static readonly DETAILS = "↓";
//   static readonly NAV_RIGHT = "➔";
//   static readonly NAV_LEFT = "←";

export const hotKeysData = [
  {
    icon: <div className="text-base font-medium">1</div>,
    label: "TOP MENU",
    hotkey: "1",
  },
  {
    icon: (
      <>
        <ArrowDown />
        {""}
      </>
    ),
    label: "DETAILS",
    hotkey: "ArrowDown",
  },
  {
    icon: (
      <>
        <ArrowLeft />
      </>
    ),
    label: "PREV GAME",
    hotkey: "ArrowLeft",
  },
  {
    icon: (
      <>
        <ArrowRight />
      </>
    ),
    label: "NEXT GAME",
    hotkey: "ArrowRight",
  },
];

export type THotKeysData = (typeof hotKeysData)[number];
