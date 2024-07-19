const grouped_fsa_adjacency = require("./grouped_fsa_adjacency.json");

function getAdjacentFsas(fsa, level = 1, visited = new Set()) {
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
// Export functions
module.exports = {
  getAdjacentFsas
};
