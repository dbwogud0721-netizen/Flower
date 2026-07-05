/**
 * Central path builders for every image the app references. Real files live
 * under /public/images and are produced by ChatGPT — see IMAGE_ASSETS.md at
 * the project root for the full manifest of expected filenames/dimensions.
 *
 * Never hand-draw a replacement here; if a new screen needs an image, add
 * its path builder + an entry in the manifest, then use <Image> with the
 * placeholder fallback until the real file is delivered.
 */

export const flowerThumbnail = (id: string) => `/images/flowers/${id}_thumbnail.png`;
export const flowerDetail = (id: string) => `/images/flowers/${id}_detail.png`;

/** Flower Detail screen's photo gallery — a whole "exhibition room" of shots per flower. */
export const flowerGalleryImage = (id: string, n: number) =>
  `/images/flowers/gallery/${id}/${id}_${String(n).padStart(2, "0")}.png`;

export const wrapImage = (id: string) => `/images/wraps/wrap_${id}.png`;
export const ribbonImage = (id: string) => `/images/ribbons/ribbon_${id}.png`;

export type BouquetColorKey = "pink" | "white" | "purple" | "orange" | "mixed";
export const bouquetHero = (color: BouquetColorKey, variant = 1) =>
  `/images/bouquets/bouquet_${color}_${String(variant).padStart(2, "0")}.png`;

/** Real flower-shop bouquet photo matched by dominant color + wrap style — see bouquetMatch.ts. */
export const bouquetPhoto = (color: BouquetColorKey, wrapId: string) => `/images/bouquets/bouquet_${color}_${wrapId}.png`;

export const icon = (name: string) => `/images/icons/icon_${name}.png`;

export const heroImage = (name: string) => `/images/hero/${name}.png`;
export const backgroundImage = (name: string) => `/images/backgrounds/background_${name}.png`;

/** Screen-specific one-off assets, e.g. homeAsset("home_hero_01.png"). */
export const homeAsset = (fileName: string) => `/assets/home/${fileName}`;
