/* eslint-disable flowtype/require-return-type */
import {test} from "tap";

import pairsKeys from "./index";

test(({same, end}) => {
  same(
    pairsKeys([
      ["a", "b"],
      ["c", "d"],
    ]),
    ["a", "c"]
  );
  end();
});
