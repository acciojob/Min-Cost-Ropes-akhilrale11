function mincost(arr) {
    // Create a Min-Heap using the built-in sort (O(n log n))
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    // While there are more than one ropes, combine the smallest two
    while (arr.length > 1) {
        const cost = arr[0] + arr[1]; // Take two smallest ropes
        totalCost += cost; // Add to the total cost
        arr.splice(0, 2, cost); // Remove the two and add their sum
        arr.sort((a, b) => a - b); // Re-sort the array
    }

    return totalCost; // Return the minimum cost
}

module.exports = mincost;
