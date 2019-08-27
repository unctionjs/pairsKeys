
import {test} from "tap";

import pairsKeys from "./";

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
