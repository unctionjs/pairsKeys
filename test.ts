
import pairsKeys from "./index";

test(() => {
  expect(pairsKeys([
    ["a", "b"],
    ["c", "d"],
  ])).toEqual(["a", "c"]);
});
