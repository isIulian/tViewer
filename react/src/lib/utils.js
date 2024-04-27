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


export function getDiffKeys (object1, object2) {
  const objKeys1 = Object.keys(object1);

  let diffKeys = [];
  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (isObjects) {
      let diffKeys = getDiffKeys(value1, value2);
      if (diffKeys.length > 0) {
        let nestedDiffKeys = [];
        for (const nestedKey in diffKeys) {
          nestedDiffKeys.push(key + "." + nestedKey);
        }
        diffKeys = [...diffKeys, nestedDiffKeys];
      }
    }
    else if (value1 !== value2) {
      diffKeys.push(key);
    }
  }

  return diffKeys;
}

function isObject (object) {
  return object != null && typeof object === "object";
}
