# Flower Museum — Placeholder 교체 우선순위

`IMAGE_ASSETS.md`의 전체 목록을 "화면에서 보이는 빈도/임팩트" 기준으로 재정렬. 위에서부터 순서대로 넣으면 눈에 띄는 개선이 가장 빨리 체감됨.

| 우선순위 | 항목 | 파일 수 | 파일명 | 이유 |
|---|---|---|---|---|
| ✅ 완료 | Home hero | 1 | `home_hero_02.png` | 이미 적용됨 |
| **P0** | 하단 네비 아이콘 | 5 | `icon_home.png` `icon_gallery.png` `icon_bouquet.png` `icon_search.png` `icon_user.png` | 전 화면 공통 노출, 가장 자주 보임 |
| **P0** | 공통 UI 아이콘 | 3 | `icon_back.png` `icon_heart_outline.png` `icon_heart_filled.png` | 뒤로가기/찜하기, 서브화면 거의 전부에 등장 |
| **P1** | Home 전용 | 5 | `home_season_banner_01.png` `icon_bell.png` `icon_menu-exhibition.png` `icon_menu-bouquet.png` `icon_menu-dictionary.png` | 첫 화면(Home) 완성도 직결 |
| **P1** | Home 추천 꽃 4종 썸네일 | 4 | `garden-rose_thumbnail.png` `lisianthus_thumbnail.png` `pink-gerbera_thumbnail.png` `hydrangea_thumbnail.png` | Home "오늘의 추천 꽃"에 바로 노출 |
| **P2** | 트렌딩 10종 썸네일(위 4종 제외 나머지) | 6 | `ranunculus_thumbnail.png` `peony_thumbnail.png` `sweet-pea_thumbnail.png` `delphinium_thumbnail.png` `anemone_thumbnail.png` `tulip_thumbnail.png` | Trending/Exhibition 리스트에서 상위 노출 |
| **P3** | 나머지 꽃 썸네일 7종 | 7 | `white-rose_thumbnail.png` `marguerite-daisy_thumbnail.png` `mini-chrysanthemum_thumbnail.png` `freesia_thumbnail.png` `marigold_thumbnail.png` `baby-breath_thumbnail.png` `eucalyptus_thumbnail.png` | Exhibition 룸(화이트/오렌지 계열 등) 그리드 채우기 |
| **P4** | 꽃 상세(detail) 사진 17종 | 17 | `{id}_detail.png` (전체 꽃 id, `IMAGE_ASSETS.md` 표 참고) | Flower Detail 화면 상단 히어로 — 썸네일 다 들어온 뒤 |
| **P5** | Bouquet Builder 소품 | 10 | `wrap_ivory-kraft.png` 등 포장지 5종 + `ribbon_silk-blush.png` 등 리본 5종 | 빌더 화면 포장지/리본 탭에서만 보임 |
| **P5** | Builder 액션 아이콘 | 5 | `icon_undo.png` `icon_redo.png` `icon_reset.png` `icon_save.png` `icon_plus.png` | 작지만 빌더/상세 화면 핵심 버튼 |
| **P6** | 마이 화면 | 1 | `icon_user-avatar.png` | 화면 1곳, 임팩트 작음 |
| **P6** | 완성 꽃다발 큐레이션 샷 | 5 | `bouquet_pink_01.png` `bouquet_white_01.png` `bouquet_purple_01.png` `bouquet_orange_01.png` `bouquet_mixed_01.png` | 빌더 완주해야 보이는 마지막 화면 |
| **P6** | 섹션 배경 배너 | 2 | `background_greenhouse.png` `background_trending.png` | 현재 코드에서 아직 실제 사용 안 됨(장식용 예비) |

**총 66장** (완료 1장 제외). P0~P1(18장)만 채워도 Home+공통 네비 완성도 크게 올라감.
