import {head} from "ramda"
import mapValues from "@unction/mapvalues"

export default function pairsKeys (pairs: Array<[KeyType, ValueType]>): Array<KeyType> {
  return mapValues(head)(pairs)
}
