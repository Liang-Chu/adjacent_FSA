**FSA Adjacency**

This package provides an easy way to find surrounding area by FSA(The first three letters of the Canadian Post code).
Might support other country in the future.

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