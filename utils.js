const grouped_fsa_adjacency = require("./adjacency_data.json")
const getAdjacentFsas = (fsa, maxLevel = 1) => {
  fsa = fsa.toUpperCase()
  const distances = new Map() // To store distances from the center FSA
  const queue = [{ fsa, distance: 0 }]
  const visited = new Set()

  while (queue.length > 0) {
    const { fsa: currentFsa, distance } = queue.shift()

    if (distance > maxLevel) continue // Skip if distance exceeds maxLevel

    if (!visited.has(currentFsa)) {
      visited.add(currentFsa)
      distances.set(currentFsa, distance)

      const f = currentFsa[0] // Extract the first character (province)
      const sa = currentFsa.slice(1, 3) // Extract the second and third characters (SA/group)
      const adjacentFsas =
        grouped_fsa_adjacency[f] && (grouped_fsa_adjacency[f][sa] || [])

      if (adjacentFsas) {
        for (let adjacentFsa of adjacentFsas) {
          if (!visited.has(adjacentFsa)) {
            queue.push({ fsa: adjacentFsa, distance: distance + 1 })
          }
        }
      }
    }
  }

  // Remove the initial FSA from the result
  distances.delete(fsa)

  return Array.from(distances.entries()).map(([fsa, distance]) => ({
    fsa,
    distance,
  }))
}

const isFsa = (fsaCode) => {
  // Validate the format of the FSA code
  if (typeof fsaCode !== "string" || fsaCode.length !== 3) {
    return false
  }

  const [firstChar, secondChar, thirdChar] = fsaCode.toUpperCase()

  if (
    !/^[A-Z]$/.test(firstChar) ||
    !/^\d$/.test(secondChar) ||
    !/^[A-Z]$/.test(thirdChar)
  ) {
    return false
  }

  // Extract 'f' and 'sa' values
  const f = firstChar
  const sa = secondChar + thirdChar

  // Check if fsa[f][sa] is defined
  return grouped_fsa_adjacency[f] && grouped_fsa_adjacency[f][sa] !== undefined
}

//get all fsas as an array
const getAllFsas = (f) => {
  if (f && (typeof f !== "string" || f.length > 1)) {
    return []
  }

  const result = []
  if (!f || f.length === 0) {
    for (const mainKey in grouped_fsa_adjacency) {
      for (const subKey in grouped_fsa_adjacency[mainKey]) {
        result.push(`${mainKey}${subKey}`)
      }
    }
  } else if (f.length === 1) {
    for (const subKey in grouped_fsa_adjacency[f.toUpperCase()]) {
      result.push(`${f.toUpperCase()}${subKey}`)
    }
  }
  return result
}
// Export functions
module.exports = {
  getAdjacentFsas,
  isFsa,
  getAllFsas,
}
