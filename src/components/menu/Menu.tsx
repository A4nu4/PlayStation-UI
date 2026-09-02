import { ReactNode } from "react";
import { CATEGORIES } from "../../data/menu.data";
import cn from "clsx";
import type { IMenuItem } from "../../types";

export interface MenuItemConfig {
  id: string | number;
  label: ReactNode;
  value: string;
}

interface Props {
  items: IMenuItem[];
  activeValue: string;
  onSelect: (value: string) => void;
  containerClassName?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
}

export const Menu = ({
  items,
  activeValue,
  onSelect,
  containerClassName = "",
  buttonClassName = "border-2 font-medium rounded-full py-0.5 px-5",
  activeButtonClassName = "border-[#1d6ab2]",
}: Props) => {
  return (
    <nav className={containerClassName}>
      <ul className="flex items-center">
        {items.map((item) => (
          <li key={item.slug}>
            <button
              onClick={() => onSelect(item.slug)}
              className={cn(
                buttonClassName,
                activeValue === item.slug
                  ? activeButtonClassName
                  : "border-transparent",
              )}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
