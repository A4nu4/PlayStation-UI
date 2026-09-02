import React from "react";
import TopMenu from "./components/top-menu/TopMenu";
import GameCarousel from "./components/game-carousel/GameCarousel";
import type { TCategorySlug } from "./types";
import type { SwiperRef } from "swiper/react";
import { useHotkeys } from "react-hotkeys-hook";
import { KeyEnum } from "./config/hotkeys.config";
import { CATEGORIES } from "./data/categories.data";

type TLevelFocus = "top-menu" | "game-carousel" | "details";

function App() {
  const [activeCategory, setActiveCategory] =
    React.useState<TCategorySlug>("all");

  const [levelFocus, setLevelFocus] =
    React.useState<TLevelFocus>("game-carousel");

  const swiperRef = React.useRef<SwiperRef>(null);

  useHotkeys(KeyEnum.ArrowUp, () => {
    if (levelFocus === "game-carousel") setLevelFocus("top-menu");
    else if (levelFocus === "details") setLevelFocus("game-carousel");
  });

  useHotkeys(KeyEnum.ArrowDown, () => {
    if (levelFocus === "top-menu") setLevelFocus("game-carousel");
    else if (levelFocus === "game-carousel") setLevelFocus("details");
  });

  useHotkeys(KeyEnum.ArrowRight, () => {
    if (levelFocus === "top-menu") {
      const nextCategory =
        CATEGORIES.findIndex((cat) => cat.slug === activeCategory) + 1;
      if (nextCategory < CATEGORIES.length) {
        setActiveCategory(CATEGORIES[nextCategory].slug);
      }
    } else if (levelFocus === "game-carousel") {
      swiperRef.current?.swiper.slideNext();
    }
  });

  useHotkeys(KeyEnum.ArrowLeft, () => {
    if (levelFocus === "top-menu") {
      const prevCategory =
        CATEGORIES.findIndex((cat) => cat.slug === activeCategory) - 1;
      if (prevCategory >= 0) {
        setActiveCategory(CATEGORIES[prevCategory].slug);
      }
    } else if (levelFocus === "game-carousel") {
      swiperRef.current?.swiper.slidePrev();
    }
  });

  return (
    <div
      className="flex flex-col justify-between flex-1"
      style={{ height: "75%" }}
    >
      <TopMenu
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <GameCarousel swiperRef={swiperRef} />
    </div>
  );
}

export default App;
