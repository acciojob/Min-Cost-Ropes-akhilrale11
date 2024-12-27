function mincost(arr) {
    // Min heap implementation using a priority queue
    const minHeap = [];
    
    // Helper functions for the min heap
    function push(val) {
        minHeap.push(val);
        let idx = minHeap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (minHeap[parentIdx] <= minHeap[idx]) break;
            [minHeap[parentIdx], minHeap[idx]] = [minHeap[idx], minHeap[parentIdx]];
            idx = parentIdx;
        }
    }

    function pop() {
        if (minHeap.length === 1) return minHeap.pop();
        const top = minHeap[0];
        minHeap[0] = minHeap.pop();
        let idx = 0;
        while (true) {
            const leftIdx = 2 * idx + 1;
            const rightIdx = 2 * idx + 2;
            let smallestIdx = idx;

            if (leftIdx < minHeap.length && minHeap[leftIdx] < minHeap[smallestIdx]) {
                smallestIdx = leftIdx;
            }
            if (rightIdx < minHeap.length && minHeap[rightIdx] < minHeap[smallestIdx]) {
                smallestIdx = rightIdx;
            }
            if (smallestIdx === idx) break;
            [minHeap[idx], minHeap[smallestIdx]] = [minHeap[smallestIdx], minHeap[idx]];
            idx = smallestIdx;
        }
        return top;
    }

    // Push all elements into the min heap
    for (let val of arr) {
        push(val);
    }

    // Calculate the minimum cost
    let totalCost = 0;
    while (minHeap.length > 1) {
        const first = pop();
        const second = pop();
        const cost = first + second;
        totalCost += cost;
        push(cost);
    }

    return totalCost;
}

module.exports = mincost;
