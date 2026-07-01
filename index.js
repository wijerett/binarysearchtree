

// export class node {
//     constructor(node, start, end) {
//         this.node = node;
//         this.start = start;
//         this.end = end;
//     }
// }

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    dequeue() {
        if (this.isEmpty()) return null;
    }
}

function tree(arr) {
    let n = arr.length;
    if (n === 0) return null;

    let mid = Math.floor((n - 1) / 2);
    let root = buildTree(arr);

    let q = new Queue();
    q.enqueue(new Data(root, 0, n - 1));

    while (!q.isEmpty()) {
        let d = q.dequeue();
        let curr = d.node;
        let st = d.start, en = d.end;
        mid = Math.floor((st + en) / 2);

        if (st < mid) {
            let leftVal = Math.floor((st + mid - 1) / 2);
            let left = new Node(arr[leftVal]);
            curr.left = left;
            q.enqueue(new Data(left, st, mid - 1));
        }

        if (en > mid) {
            let rightVal = Math.floor((mid + 1 + en) / 2);
            let right = new Node(arr[rightVal]);
            curr.right = right;
            q.enqueue(new Data(right, mid + 1, en))
        }
    }
    return root;
}

console.log(tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function buildTree(array) {
    var array = array
}
