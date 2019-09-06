
import pairsKeys from "./index.ts";

test(() => {
  expect(pairsKeys([
    ["a", "b"],
    ["c", "d"],
  ])).toEqual(["a", "c"]);
});
