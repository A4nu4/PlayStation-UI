import React, { FC } from "react";
import type { TGame } from "../../data/games.data";
import { Menu } from "../menu/Menu";
import { MENU } from "../../data/menu.data";

interface Props {
  game: TGame;
}

const GameHeader = ({ game }: Props) => {
  const [activeItem, setActiveItem] = React.useState("play");
  return (
    <div>
      <Menu
        activeValue={activeItem}
        items={MENU}
        onSelect={(value) => setActiveItem(value)}
      />
      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        <div>
          <div className="mb-1">
            <img
              src={
                game.platform === "PS5"
                  ? "/images/icons/PS5_logo.png"
                  : "/images/icons/PS4_logo.png"
              }
              alt={game.platform}
              width={50}
              className="filter brightness-0 invert fadeIn transition-opacity duration-300 ease-in-out"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">{game?.title}</h1>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <StatBlock label="PLAYED FOR" value="23H 15M" />
          <StatBlock label="STORAGE" value="152GB" />
          <StatBlock label="ADDONS" value="6" />
          <StatBlock label="OWNED BY FRIENDS" value="12" />
        </div>
      </div>
    </div>
  );
};

interface StatBlockProps {
  label: string;
  value: string;
}

const StatBlock: FC<StatBlockProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </span>
      <span className="mt-1 text-2xl font-bold text-white">{value}</span>
    </div>
  );
};

export default GameHeader;
