import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn (...inputs) {
  return twMerge(clsx(inputs));
}

export function range (start, stop, step = 1) {
  return Array.from({ length: stop - start + 1 }, (_, i) => start + (i * step)) 
}