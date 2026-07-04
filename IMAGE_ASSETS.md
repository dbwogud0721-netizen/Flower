# Flower Museum — Image Asset Manifest

This is the full list of image files ChatGPT (art director) needs to produce.
Drop each file into the exact path below — no code changes required, the app
picks them up automatically via `src/components/ui/image.tsx` +
`src/utils/assetPaths.ts`. Until a file exists, the app shows a labeled
placeholder box (photos) or a blank neutral swatch (icons) instead.

Do not rename files. If a new one is needed, add it here first, add a path
helper in `src/utils/assetPaths.ts`, then reference it with `<Image>`.

## Flower photos — `public/images/flowers/`

Two shots per flower: a portrait thumbnail (grid cards, builder chips, list
rows) and a landscape detail hero (flower detail screen).

- Thumbnail: 480×600px (4:5 portrait), clean/soft background, single stem or small cluster.
- Detail: 1000×750px (4:3 landscape), same flower styled a little more editorially.

| Flower (KR) | Flower (EN) | Thumbnail file | Detail file |
|---|---|---|---|
| 핑크 거베라 | Pink Gerbera | `pink-gerbera_thumbnail.png` | `pink-gerbera_detail.png` |
| 라넌큘러스 | Ranunculus | `ranunculus_thumbnail.png` | `ranunculus_detail.png` |
| 피오니 | Peony | `peony_thumbnail.png` | `peony_detail.png` |
| 리시안서스 | Lisianthus | `lisianthus_thumbnail.png` | `lisianthus_detail.png` |
| 스위트피 | Sweet Pea | `sweet-pea_thumbnail.png` | `sweet-pea_detail.png` |
| 델피니움 | Delphinium | `delphinium_thumbnail.png` | `delphinium_detail.png` |
| 아네모네 | Anemone | `anemone_thumbnail.png` | `anemone_detail.png` |
| 수국 | Hydrangea | `hydrangea_thumbnail.png` | `hydrangea_detail.png` |
| 가든 로즈 | Garden Rose | `garden-rose_thumbnail.png` | `garden-rose_detail.png` |
| 화이트 로즈 | White Rose | `white-rose_thumbnail.png` | `white-rose_detail.png` |
| 튤립 | Tulip | `tulip_thumbnail.png` | `tulip_detail.png` |
| 마가렛 데이지 | Marguerite Daisy | `marguerite-daisy_thumbnail.png` | `marguerite-daisy_detail.png` |
| 소국 | Mini Chrysanthemum | `mini-chrysanthemum_thumbnail.png` | `mini-chrysanthemum_detail.png` |
| 프리지어 | Freesia | `freesia_thumbnail.png` | `freesia_detail.png` |
| 메리골드 | Marigold | `marigold_thumbnail.png` | `marigold_detail.png` |
| 안개꽃 | Baby's Breath | `baby-breath_thumbnail.png` | `baby-breath_detail.png` |
| 유칼립투스 | Eucalyptus | `eucalyptus_thumbnail.png` | `eucalyptus_detail.png` |

(Filenames must match the `id` field in `src/data/flowers.ts` exactly.)

## Wrap paper swatches — `public/images/wraps/`

240×240px square, close-up material texture.

- `wrap_ivory-kraft.png` — 아이보리 크라프트
- `wrap_beige-linen.png` — 베이지 리넨
- `wrap_blush-sheer.png` — 블러쉬 시어
- `wrap_sage-matte.png` — 세이지 매트
- `wrap_charcoal-matte.png` — 차콜 매트

## Ribbon swatches — `public/images/ribbons/`

240×240px square, close-up material texture.

- `ribbon_silk-blush.png` — 실크 블러쉬
- `ribbon_satin-ivory.png` — 새틴 아이보리
- `ribbon_velvet-wine.png` — 벨벳 와인
- `ribbon_linen-sage.png` — 리넨 세이지
- `ribbon_gold-cord.png` — 골드 코드

## Curated bouquet hero shots — `public/images/bouquets/`

900×1100px portrait, full studio-photographed finished bouquet. Used on the
"완성된 꽃다발" preview screen, picked by the dominant color of the user's
selection. `01` leaves room for future variants (`02`, `03`, ...).

- `bouquet_pink_01.png`
- `bouquet_white_01.png`
- `bouquet_purple_01.png`
- `bouquet_orange_01.png`
- `bouquet_mixed_01.png` (fallback when no single color dominates)

## Hero / section backgrounds

- `public/images/hero/home_hero.png` — (superseded by `home_hero_01.png` below for the current Home design; kept for any older reference)
- `public/images/backgrounds/background_greenhouse.png` — 1200×600px landscape, exhibition list top banner
- `public/images/backgrounds/background_trending.png` — 1200×600px landscape, trending list top banner

## Home screen — `public/assets/home/`

Home screen implements the ChatGPT-approved mockup pixel-for-pixel
(2026-07-04). Screen-specific photos live here rather than under
`public/images/` since they're one-offs, not reused elsewhere.

- `home_hero_01.png` — 1080×1400px portrait, full-bleed hero photo behind the greeting/title/CTA (greenhouse/floral corridor in the reference mockup)
- `home_season_banner_01.png` — 700×700px, right-hand photo panel of the season banner card (tulips + baby's breath in the reference mockup)

## UI icons — `public/images/icons/`

48×48px, transparent background, single consistent line/fill style, ink
color (`#2f2a26`) unless noted. These are placeholders too — no hand-drawn
SVG icons anywhere in the codebase.

| File | Used for |
|---|---|
| `icon_home.png` | bottom nav — 홈 |
| `icon_gallery.png` | bottom nav — 전시관 |
| `icon_bouquet.png` | bottom nav — 꽃다발 |
| `icon_search.png` | bottom nav — 검색; also home search entry points |
| `icon_user.png` | bottom nav — 마이 |
| `icon_trend.png` | no longer in the bottom nav per the current Home design, kept for the standalone `/trending` screen |
| `icon_bell.png` | home hero — notification bell (rendered white via CSS filter over the photo) |
| `icon_menu-exhibition.png` | home quick-menu — 전시관 (tulip glyph, distinct from `icon_gallery`) |
| `icon_menu-bouquet.png` | home quick-menu — 꽃다발 |
| `icon_menu-dictionary.png` | home quick-menu — 꽃말 사전 |
| `icon_back.png` | top bar back button |
| `icon_heart_outline.png` | wishlist/즐겨찾기, unliked state |
| `icon_heart_filled.png` | wishlist, liked state (blush color) |
| `icon_chevron_right.png` | "더보기" section links |
| `icon_undo.png` | builder — 되돌리기 |
| `icon_redo.png` | builder — 다시하기 |
| `icon_reset.png` | builder — 초기화 |
| `icon_save.png` | builder — 저장하기 |
| `icon_plus.png` | "꽃다발에 추가하기" CTA |
| `icon_user-avatar.png` | 마이 화면 — 프로필 원형 사진 (72×72 표시, 정사각형으로 제공) |

## How placeholders behave

`<Image src="/images/flowers/rose_thumbnail.png" alt="장미" variant="photo" />`
renders the real photo once it exists at that path. Until then it shows a
dashed box labeled with the filename so it's obvious what's still missing.
Icons (`variant="icon"`) show a small blank neutral circle instead (no
placeholder glyph, since icons are ChatGPT's to design too).
