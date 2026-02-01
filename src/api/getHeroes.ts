import { Hero } from "../types/HeroType";

const API_URL = process.env.API_CHARACTERS_URL;
export async function getHeroes(): Promise<Hero[]> {
  const res = await fetch(API_URL!);
  if (!res.ok) throw new Error("Request failed");
  const json = await res.json();
  return json.results;
}
