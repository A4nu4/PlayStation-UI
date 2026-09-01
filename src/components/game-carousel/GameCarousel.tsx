import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GAMES_DATA } from "../../data/games.data";
import { GameItem } from "./game-item/GameItem";

import "swiper/css";
import { useGameStore } from "../../store";

const GameCarousel = () => {
  const { setActiveGameSlug } = useGameStore();

  return (
    <div className="ml-24">
      <Swiper
        slidesPerView={6}
        spaceBetween={18}
        loop
        slideToClickedSlide
        initialSlide={1}
        onSlideChange={(e) => {
          const gameSlug = GAMES_DATA[e.realIndex].slug;
          setActiveGameSlug(gameSlug);
        }}
      >
        {GAMES_DATA.map((game) => (
          <SwiperSlide key={game.slug}>
            <GameItem game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameCarousel;
