import React from "react";
import { CATEGORIES } from "../../data/categories.data";
import cn from "clsx";

interface Props {
  activeCategory: string;
  setActiveCategory: (slug: string) => void;
}

const TopMenu = ({ activeCategory, setActiveCategory }: Props) => {
  return (
    <nav className="ml-24 mt-2">
      <ul className="flex gap-5 items-center">
        {CATEGORIES.map((category) => (
          <li key={category.slug}>
            <button
              onClick={() => {
                console.log(category.slug);
                setActiveCategory(category.slug);
              }}
              className={cn(
                "border-2 font-medium rounded-full py-0.5 px-5",
                activeCategory === category.slug
                  ? "border-[#1d6ab2]"
                  : "border-transparent",
              )}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopMenu;
