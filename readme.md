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

return: array of FSA
example use:

```JavaScript
const { getAdjacentFsas } = require("adjacent_fsa");
...
console.log(getAdjacentFsas("L5V",2));
```

example output:

```JavaScript
[
  'L5B', 'L5C', 'L5M',
  'L5N', 'L5R', 'L5W',
  'L4Z', 'L5A', 'L5G',
  'L5H', 'L5L', 'L9E',
  'L0P', 'L6Y', 'L4W',
  'L5S', 'L5T', 'L6W'
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
