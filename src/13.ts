import { getRandomInt } from "https://deno.land/x/random_ext@v1.0/mod.ts";
function randomNumber(min: number, max: number): number {
  return getRandomInt(min, max);
}