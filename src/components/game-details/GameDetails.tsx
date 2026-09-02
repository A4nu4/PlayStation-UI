import React from "react";
import GameHeader from "./GameHeader";
import GameLauncher from "./GameLauncher";
import { useGameStore } from "../../store";

import cn from "clsx";

const GameDetails = ({ levelFocus }: { levelFocus: string }) => {
  const { getActiveGame } = useGameStore();

  return (
    <div
      className={cn(
        "items-center justify-between mx-28",
        levelFocus === "details" ? "flex" : "hidden",
      )}
    >
      <GameHeader game={getActiveGame()} />
      <GameLauncher />
    </div>
  );
};

export default GameDetails;
