/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import optimisticP from "./source"

test(({same, end}) => {
  same(
    pairsKeys([
      ["a", "b"],
      ["c", "d"],
    ]),
    ["a", "c"]
  )
  end()
})
