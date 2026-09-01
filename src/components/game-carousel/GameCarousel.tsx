import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GAMES_DATA } from "../../data/games.data";
import { GameItem } from "./game-item/GameItem";

import "swiper/css";
import { EffectCoverflow } from "swiper/modules";

const GameCarousel = () => {
  return (
    <div className="ml-24">
      <Swiper
        slidesPerView={6}
        spaceBetween={18}
        loop
        slideToClickedSlide
        initialSlide={1}
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
