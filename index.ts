import {head} from "ramda";
import mapValues from "@unction/mapvalues";

export default function pairsKeys<A, B> (pairs: ListType<[A, B]>): Array<A> | Set<A> {
  return mapValues(head)(pairs);
}
