import { useRequest } from "ahooks";
import { getHeroes } from "../api/getHeroes";

export function useHeroes() {
  return useRequest(getHeroes);
}
