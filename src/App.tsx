import React from "react";
import { Menu } from "./components/menu/Menu";
import GameCarousel from "./components/game-carousel/GameCarousel";
import type { SwiperRef } from "swiper/react";
import { useHotkeys } from "react-hotkeys-hook";
import { KeyEnum } from "./config/hotkeys.config";
import { CATEGORIES } from "./data/menu.data";
import GameDetails from "./components/game-details/GameDetails";
import cn from "clsx";

type TLevelFocus = "top-menu" | "game-carousel" | "details";

function App() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");

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
    <div className="flex h-full flex-col ">
      <div className="flex flex-col justify-between flex-1">
        <div
          className={cn(
            "ml-28 mt-5",
            levelFocus === "details" ? "hidden" : "block",
          )}
        >
          <Menu
            activeValue={activeCategory}
            onSelect={(value) => setActiveCategory(value)}
            items={CATEGORIES}
          />
        </div>
        <div className={cn(levelFocus === "details" ? "hidden" : "block")}>
          <GameCarousel swiperRef={swiperRef} />
        </div>
      </div>

      <GameDetails levelFocus={levelFocus} />
    </div>
  );
}

export default App;
