import { atom } from "jotai";
import Bell from "./Bell";

export const bellAtom = atom(new Bell());
export const runningAtom = atom((get) => {
  const obj = get(bellAtom);
  return obj.running;
});
