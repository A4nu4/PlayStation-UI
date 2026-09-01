import React from "react";
import TopMenu from "./components/top-menu/TopMenu";
import GameCarousel from "./components/game-carousel/GameCarousel";
import type { TCategorySlug } from "./types";

function App() {
  const [activeCategory, setActiveCategory] =
    React.useState<TCategorySlug>("all");

  return (
    <div
      className="flex flex-col justify-between flex-1"
      style={{ height: "75%" }}
    >
      <TopMenu
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <GameCarousel />
    </div>
  );
}

export default App;
