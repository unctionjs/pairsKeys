import {head} from "ramda";
import mapValues from "@unction/mapvalues";
import {ListType} from "./types";

export default function pairsKeys<A, B> (pairs: ListType<[A, B]>): ListType<A> {
  return mapValues(head)(pairs);
}
