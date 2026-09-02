import { RefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";

import { GAMES_DATA } from "../../data/games.data";
import { GameItem } from "./game-item/GameItem";

import "swiper/css";
import { useGameStore } from "../../store";

interface Props {
  swiperRef: RefObject<SwiperRef | null>;
}

const GameCarousel = ({ swiperRef }: Props) => {
  const { setActiveGameSlug } = useGameStore();
  return (
    <div className="ml-24">
      <Swiper
        ref={swiperRef}
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
