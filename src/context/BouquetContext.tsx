"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export interface BouquetStem {
  flowerId: string;
  count: number;
}

export interface BouquetState {
  stems: BouquetStem[];
  wrapId: string;
  ribbonId: string;
  babyBreath: boolean;
  eucalyptus: boolean;
  message: string;
}

const initialState: BouquetState = {
  stems: [],
  wrapId: "ivory-kraft",
  ribbonId: "silk-blush",
  babyBreath: true,
  eucalyptus: false,
  message: "",
};

interface BouquetContextValue extends BouquetState {
  addStem: (flowerId: string) => void;
  removeStem: (flowerId: string) => void;
  setWrapId: (id: string) => void;
  setRibbonId: (id: string) => void;
  setBabyBreath: (v: boolean) => void;
  setEucalyptus: (v: boolean) => void;
  setMessage: (v: string) => void;
  undo: () => void;
  redo: () => void;
  reset: () => void;
  totalStems: number;
  canUndo: boolean;
  canRedo: boolean;
  hydrated: boolean;
}

const BouquetContext = createContext<BouquetContextValue | null>(null);

const STORAGE_KEY = "flower-museum-bouquet";

export function BouquetProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<BouquetState[]>([initialState]);
  const [pointer, setPointer] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  const state = history[pointer];

  useEffect(() => {
    const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as BouquetState;
        setHistory([parsed]);
        setPointer(0);
      } catch {
        // ignore malformed cache
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const commit = (next: BouquetState) => {
    setHistory((prev) => [...prev.slice(0, pointer + 1), next]);
    setPointer((p) => p + 1);
  };

  const addStem = (flowerId: string) => {
    const existing = state.stems.find((s) => s.flowerId === flowerId);
    const stems = existing
      ? state.stems.map((s) => (s.flowerId === flowerId ? { ...s, count: s.count + 1 } : s))
      : [...state.stems, { flowerId, count: 1 }];
    commit({ ...state, stems });
  };

  const removeStem = (flowerId: string) => {
    const existing = state.stems.find((s) => s.flowerId === flowerId);
    if (!existing) return;
    const stems =
      existing.count <= 1
        ? state.stems.filter((s) => s.flowerId !== flowerId)
        : state.stems.map((s) => (s.flowerId === flowerId ? { ...s, count: s.count - 1 } : s));
    commit({ ...state, stems });
  };

  const setWrapId = (wrapId: string) => commit({ ...state, wrapId });
  const setRibbonId = (ribbonId: string) => commit({ ...state, ribbonId });
  const setBabyBreath = (babyBreath: boolean) => commit({ ...state, babyBreath });
  const setEucalyptus = (eucalyptus: boolean) => commit({ ...state, eucalyptus });
  const setMessage = (message: string) => commit({ ...state, message });

  const undo = () => setPointer((p) => Math.max(0, p - 1));
  const redo = () => setPointer((p) => Math.min(history.length - 1, p + 1));
  const reset = () => commit(initialState);

  const totalStems = useMemo(() => state.stems.reduce((sum, s) => sum + s.count, 0), [state.stems]);

  const value: BouquetContextValue = {
    ...state,
    addStem,
    removeStem,
    setWrapId,
    setRibbonId,
    setBabyBreath,
    setEucalyptus,
    setMessage,
    undo,
    redo,
    reset,
    totalStems,
    canUndo: pointer > 0,
    canRedo: pointer < history.length - 1,
    hydrated,
  };

  return <BouquetContext.Provider value={value}>{children}</BouquetContext.Provider>;
}

export function useBouquet() {
  const ctx = useContext(BouquetContext);
  if (!ctx) throw new Error("useBouquet must be used within BouquetProvider");
  return ctx;
}
