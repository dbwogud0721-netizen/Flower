"use client";

import { useMemo, useState } from "react";
import { BottomNavigation } from "@/components/layouts/BottomNavigation";
import { Typography } from "@/components/ui/typography";
import { Image } from "@/components/ui/image";
import { FlowerListRow } from "@/components/cards/FlowerListRow";
import { flowers } from "@/data/flowers";
import { icon } from "@/utils/assetPaths";

const popularTerms = ["장미", "거베라", "튤립", "수국", "안개꽃"];

function SearchScreen() {
  const [query, setQuery] = useState("");
  const trimmed = query.trim();

  const results = useMemo(() => {
    if (!trimmed) return [];
    const q = trimmed.toLowerCase();
    return flowers.filter(
      (f) => f.name.includes(trimmed) || f.nameEn.toLowerCase().includes(q) || f.tagline.includes(trimmed)
    );
  }, [trimmed]);

  return (
    <div className="pb-28">
      <div className="px-5 pb-2 pt-6">
        <Typography variant="h2">검색</Typography>
        <div className="mt-4 flex items-center gap-2.5 rounded-full bg-white px-4 py-3 shadow-[var(--shadow-soft-sm)]">
          <Image variant="icon" src={icon("search")} alt="" width={18} height={18} className="size-[18px]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="꽃 이름으로 검색해보세요"
            className="w-full bg-transparent text-[13.5px] text-ink placeholder:text-stone/70 focus:outline-none"
          />
        </div>
      </div>

      {!trimmed && (
        <div className="px-5 pt-4">
          <Typography variant="label" tone="muted" className="mb-2 block">
            인기 검색어
          </Typography>
          <div className="flex flex-wrap gap-2">
            {popularTerms.map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="rounded-full bg-white/70 px-3.5 py-1.5 text-[12.5px] text-ink transition-colors hover:bg-white"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {trimmed && (
        <div className="px-5 pt-2">
          {results.length > 0 ? (
            <div className="flex flex-col divide-y divide-black/[0.04]">
              {results.map((f, i) => (
                <FlowerListRow key={f.id} id={f.id} name={f.name} nameEn={f.nameEn} tagline={f.tagline} index={i} />
              ))}
            </div>
          ) : (
            <Typography variant="bodySm" tone="muted" className="mt-10 block text-center">
              "{trimmed}"에 대한 검색 결과가 없어요.
            </Typography>
          )}
        </div>
      )}

      <BottomNavigation activeHref="/search" />
    </div>
  );
}

export { SearchScreen };
