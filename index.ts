import {head} from "ramda";
import mapValues from "@unction/mapvalues";
export default function pairsKeys (pairs) {
  return mapValues(head)(pairs);
}
