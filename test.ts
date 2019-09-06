
import pairsKeys from "./index";

test("works", () => {
  expect(pairsKeys([
    ["a", "b"],
    ["c", "d"],
  ])).toEqual(["a", "c"]);
});
