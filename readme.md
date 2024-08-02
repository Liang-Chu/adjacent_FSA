**FSA Adjacency**

This package provides an easy way to find surrounding area by FSA(The first three letters of the Canadian Post code).
Might support other country in the future.

**Data Source**
parsed from [Canada government's webiste](https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/index2021-eng.cfm?Year=21)

**Installation**

```bash
npm install fsa-adjacency

```

**Function**

```JavaScript
getAdjacentFsas(fsa,level)
```

fsa: The center FSA
level: an integer indicating number of level to cover. If it isnt provided it will only return the direct adjacent FSAs (level=1)

return: array of FSA with distance
example use:

```JavaScript
const { getAdjacentFsas } = require("adjacent_fsa");
...
console.log(getAdjacentFsas("b1t", 2))
```

example output:

```JavaScript
[
  { fsa: 'B0E', distance: 1 },
  { fsa: 'B1J', distance: 1 },
  { fsa: 'B1L', distance: 1 },
  { fsa: 'B1W', distance: 1 },
  { fsa: 'B1X', distance: 1 },
  { fsa: 'B1Y', distance: 1 },
  { fsa: 'B2A', distance: 1 },
  { fsa: 'B2C', distance: 1 },
  { fsa: 'B0C', distance: 2 },
  { fsa: 'B0H', distance: 2 },
  { fsa: 'B1K', distance: 2 },
  { fsa: 'B2E', distance: 2 },
  { fsa: 'B2G', distance: 2 },
  { fsa: 'B2J', distance: 2 },
  { fsa: 'B9A', distance: 2 },
  { fsa: 'B1P', distance: 2 },
  { fsa: 'B1R', distance: 2 },
  { fsa: 'B1S', distance: 2 },
  { fsa: 'B1H', distance: 2 },
  { fsa: 'B1N', distance: 2 },
  { fsa: 'B1V', distance: 2 }
]
```

```JavaScript
isFsa(fsa)
```

fsa: a string

return: if the string is a valid fsa or not

example use:

```JavaScript
const { isFsa } = require("adjacent_fsa");
...
console.log(isFsa("L0Z"));//false
console.log(isFsa("L5v"));//true
```

example output:

```JavaScript
false
true
```

```JavaScript
getAllFsas(f)
```

f: The first character in the post code or null

return array of all fsa, or the array of fsa start by any specific letter

example use:

```JavaScript
const { getAllFsas } = require("adjacent_fsa");
...
console.log(getAllFsas('l'));
console.log(getAllFsas());
```

example output:

```JavaScript
[
  'L0A', 'L0B', 'L0C', 'L0E', 'L0G', 'L0H', 'L0J', 'L0K',
  'L0L', 'L0M', 'L0N', 'L0P', 'L0R', 'L0S', 'L1A', 'L1B',
  'L1C', 'L1E', 'L1G', 'L1H', 'L1J', 'L1K', 'L1L', 'L1M',
  'L1N', 'L1P', 'L1R', 'L1S', 'L1T', 'L1V', 'L1W', 'L1X',
  'L1Y', 'L1Z', 'L2A', 'L2E', 'L2G', 'L2H', 'L2J', 'L2M',
  'L2N', 'L2P', 'L2R', 'L2S', 'L2T', 'L2V', 'L2W', 'L3B',
  'L3C', 'L3K', 'L3L', 'L3M', 'L3P', 'L3R', 'L3S', 'L3T',
  'L3V', 'L3X', 'L3Y', 'L3Z', 'L4A', 'L4B', 'L4C', 'L4E',
  'L4G', 'L4H', 'L4J', 'L4K', 'L4L', 'L4M', 'L4N', 'L4P',
  'L4R', 'L4S', 'L4T', 'L4V', 'L4W', 'L4X', 'L4Y', 'L4Z',
  'L5A', 'L5B', 'L5C', 'L5E', 'L5G', 'L5H', 'L5J', 'L5K',
  'L5L', 'L5M', 'L5N', 'L5R', 'L5S', 'L5T', 'L5V', 'L5W',
  'L6A', 'L6B', 'L6C', 'L6E',
  ... 64 more items
]
[
  'A0A', 'A0B', 'A0C', 'A0E', 'A0G', 'A0H', 'A0J', 'A0K',
  'A0L', 'A0M', 'A0N', 'A0P', 'A0R', 'A1A', 'A1B', 'A1C',
  'A1E', 'A1G', 'A1H', 'A1K', 'A1L', 'A1M', 'A1N', 'A1S',
  'A1V', 'A1W', 'A1X', 'A1Y', 'A2A', 'A2B', 'A2H', 'A2N',
  'A2V', 'A5A', 'A8A', 'B0C', 'B0E', 'B0H', 'B0J', 'B0K',
  'B0L', 'B0M', 'B0N', 'B0P', 'B0R', 'B0S', 'B0T', 'B0V',
  'B0W', 'B1A', 'B1B', 'B1C', 'B1E', 'B1G', 'B1H', 'B1J',
  'B1K', 'B1L', 'B1M', 'B1N', 'B1P', 'B1R', 'B1S', 'B1T',
  'B1V', 'B1W', 'B1X', 'B1Y', 'B2A', 'B2C', 'B2E', 'B2G',
  'B2H', 'B2J', 'B2N', 'B2R', 'B2S', 'B2T', 'B2V', 'B2W',
  'B2X', 'B2Y', 'B2Z', 'B3A', 'B3B', 'B3E', 'B3G', 'B3H',
  'B3J', 'B3K', 'B3L', 'B3M', 'B3N', 'B3P', 'B3R', 'B3S',
  'B3T', 'B3V', 'B3Z', 'B4A',
  ... 1543 more items
]
```
