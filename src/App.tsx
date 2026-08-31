import React from "react";
import TopMenu from "./components/top-menu/TopMenu";
import GameCarousel from "./components/game-carousel/game-item/GameCarousel";
import type { TCategorySlug } from "./types";

function App() {
  const [activeCategory, setActiveCategory] =
    React.useState<TCategorySlug>("all");

  return (
    <div>
      <TopMenu
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <GameCarousel />
    </div>
  );
}

export default App;
