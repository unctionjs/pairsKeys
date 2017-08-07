# @unction/pairsKeys


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<[string, any]> -> Array<string>

Takes an array that looks like a list of pairs (key, values) and returns all the keys.

Lets say you have this data:

``` javascript
const data = {
  a: 1,
  b: 2,
  c: 3,
}
```

And you turn it into pairs:

``` javascript
const pairings = toPairs(data)
```

You would end up with this:

``` javascript
[
  ['a', 1],
  ['b', 2],
  ['c', 3],
]
```

Now you just want the keys:

``` javascript
pairsKeys(pairings)
```

You would get the following:

``` javascript
[
  'a',
  'b',
  'c',
]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/pairsKeys.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/pairsKeys.svg?maxAge=2592000&style=flat-square
