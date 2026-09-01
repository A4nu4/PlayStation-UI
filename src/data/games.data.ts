export const GAMES_DATA = [
  {
    title: "God Of War Ragnarok",
    slug: "god-of-war-ragnarok",
    coverImage: "images/cover/gow.jpeg",
    bgImage: "images/backgrounds/gow-bg.jpg",
    platform: "PS5",
  },
  {
    title: "Ghost of Yotei",
    slug: "ghost-of-yotei",
    coverImage: "images/cover/ghost-of-yotei.jpg",
    bgImage: "images/backgrounds/ghost-of-yotei-bg.jpg",
    platform: "PS5",
  },
  {
    title: "Playstation Store",
    slug: "playstation-store",
    coverImage: "images/cover/ps-store.jpg",
    bgImage: "images/backgrounds/ps-store-bg.jpeg",
    platform: "PS5",
  },
  {
    title: "Cyberpunk 2077",
    slug: "cyberpunk-2077",
    coverImage: "images/cover/cyberpunk-2077.jpg",
    bgImage: "images/backgrounds/cyberpunk-2077-bg.jpg",
    platform: "PS4",
  },
  {
    title: "Resident Evil Requiem",
    slug: "resident-evil-requiem",
    coverImage: "images/cover/re-requiem.jpg",
    bgImage: "images/backgrounds/re-requiem-bg.jpeg",
    platform: "PS5",
  },
  {
    title: "Marvel's Wolverine",
    slug: "marvel-wolverine",
    coverImage: "images/cover/wolverine.jpeg",
    bgImage: "images/backgrounds/wolverine-bg.jpg",
    platform: "PS5",
  },
  {
    title: "Final Fantasy VII Remake",
    slug: "final-fantasy-vii-remake",
    coverImage: "images/cover/ff7.jpeg",
    bgImage: "images/backgrounds/ff7-bg.jpeg",
    platform: "PS4",
  },
  {
    title: "Witcher 3",
    slug: "witcher-3",
    coverImage: "images/cover/witcher-3.jpeg",
    bgImage: "images/backgrounds/witcher-3-bg.jpeg",
    platform: "PS4",
  },
  {
    title: "Death Stranding",
    slug: "death-stranding",
    coverImage: "images/cover/death-stranding.jpeg",
    bgImage: "images/backgrounds/death-stranding-bg.jpeg",
    platform: "PS4",
  },
  {
    title: "Doom: The Dark Ages ",
    slug: "doom-tda",
    coverImage: "images/cover/doom-tda.jpeg",
    bgImage: "images/backgrounds/doom-tda-bg.jpeg",
    platform: "PS5",
  },
];

export type TGame = (typeof GAMES_DATA)[number];
