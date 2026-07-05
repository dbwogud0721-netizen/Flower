/**
 * How many gallery photos exist per flower (see IMAGE_ASSETS.md — "Flower Detail
 * gallery"). Update this the moment a new numbered file is dropped in
 * public/images/flowers/gallery/{id}/ so the masonry grid knows to render it.
 */
export const flowerGalleryCounts: Record<string, number> = {
  "pink-gerbera": 11,
  ranunculus: 16,
  peony: 16,
  lisianthus: 15,
  "sweet-pea": 14,
  delphinium: 15,
  anemone: 16,
  hydrangea: 11,
  "garden-rose": 13,
  "white-rose": 13,
  tulip: 16,
  "marguerite-daisy": 16,
  "mini-chrysanthemum": 12,
  freesia: 12,
  marigold: 10,
  "baby-breath": 16,
  eucalyptus: 12,
};

export const getFlowerGalleryCount = (id: string) => flowerGalleryCounts[id] ?? 12;
