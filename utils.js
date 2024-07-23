const grouped_fsa_adjacency = require("./grouped_fsa_adjacency.json");

function getAdjacentFsas(fsa, level = 1, visited = new Set()) {
  fsa = fsa.toUpperCase();
  if (level < 1) return [];
  const f = fsa[0]; // Extract the first character (province)
  const sa = fsa.slice(1, 3); // Extract the second and third characters (SA/group)
  const adjacentFsas =
    grouped_fsa_adjacency[f] && (grouped_fsa_adjacency[f][sa] || []);
  let nearbyFsas = new Set(adjacentFsas);
  if (level > 1) {
    for (let adjacentFsa of adjacentFsas) {
      if (!visited.has(adjacentFsa)) {
        visited.add(adjacentFsa);
        const nextLevelFsas = getAdjacentFsas(adjacentFsa, level - 1, visited);
        nextLevelFsas.forEach((fsa) => nearbyFsas.add(fsa));
      }
    }
  }

  nearbyFsas.delete(fsa); // Remove the initial FSA from the result
  return Array.from(nearbyFsas);
}

function isFsa(fsaCode) {
  // Validate the format of the FSA code
  if (typeof fsaCode !== "string" || fsaCode.length !== 3) {
    return false;
  }

  const [firstChar, secondChar, thirdChar] = fsaCode.toUpperCase();

  if (
    !/^[A-Z]$/.test(firstChar) ||
    !/^\d$/.test(secondChar) ||
    !/^[A-Z]$/.test(thirdChar)
  ) {
    return false;
  }

  // Extract 'f' and 'sa' values
  const f = firstChar;
  const sa = secondChar + thirdChar;

  // Check if fsa[f][sa] is defined
  return grouped_fsa_adjacency[f] && grouped_fsa_adjacency[f][sa] !== undefined;
}
// Export functions
module.exports = {
  getAdjacentFsas,
  isFsa,
};
