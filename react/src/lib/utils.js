import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn (...inputs) {
  return twMerge(clsx(inputs));
}

export function range (start, stop, step = 1) {
  return Array.from({ length: stop - start + 1 }, (_, i) => start + (i * step))
}

export function tryParseJson (jsonString) {
  try {
    var o = JSON.parse(jsonString);

    // Handle non-exception-throwing cases:
    // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
    // but... JSON.parse(null) returns null, and typeof null === "object", 
    // so we must check for that, too. Thankfully, null is falsey, so this suffices:
    if (o && typeof o === "object") {
      return o;
    }
  }
  catch (e) { }

  return null;
}