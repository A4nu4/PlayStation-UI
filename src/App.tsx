import React from "react";
import TopMenu from "./components/top-menu/TopMenu";
import GameCarousel from "./components/game-carousel/game-item/GameCarousel";
import Header from "./components/layout/header/Header";
import Layout from "./components/layout/layout";

function App() {
  return (
    <div>
      <Layout />
      <TopMenu />
      <GameCarousel />
    </div>
  );
}

export default App;
