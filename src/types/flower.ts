export type PetalShape = "round" | "daisy" | "ruffled" | "bell" | "cluster" | "spiky" | "cup";

export interface ColorMeaning {
  color: string;
  hex: string;
  meaning: string;
}

export interface Flower {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  meaning: string;
  seasons: string[];
  fragrance: string;
  care: string;
  origin: string;
  colorMeanings: ColorMeaning[];
  hue: string;
  accentHue: string;
  petalShape: PetalShape;
  category: string[];
  popularity: number;
  builderGroup?: "rose" | "gerbera" | "season" | "mini";
}

export interface ExhibitionRoom {
  id: string;
  title: string;
  subtitle: string;
  hue: string;
  accentHue: string;
  filter: (f: Flower) => boolean;
}

export interface WrapOption {
  id: string;
  name: string;
  hex: string;
  texture: "matte" | "kraft" | "sheer" | "linen";
}

export interface RibbonOption {
  id: string;
  name: string;
  hex: string;
}
