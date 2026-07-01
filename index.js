


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
        let item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }
    isEmpty() {
        return this.tailIndex === this.headIndex;
    }
    size() {
        return this.tailIndex - this.headIndex;
    }
}

function getHeight(root, h) {
    if (root === null) return h - 1;
    return Math.max(getHeight(root.left, h + 1), getHeight(root.right, h + 1));
}

function levelOrder(root) {
    let q = new Queue();
    q.enqueue([root, 0]);
    
    let lastLevel = 0;

    let height = getHeight(root, 0);

    while (!q.isEmpty()) {
        let [node, lvl] = q.dequeue();

        if (lvl > lastLevel) {
            console.log("");
            lastLevel = lvl;
        }
        if (lvl > height) break;

        process.stdout.write((node.data === -1 ? "N" : node.data) + " ");

        if (node.data === -1) continue;

        if (node.left === null) q.enqueue([new Node(-1), lvl + 1]);
        else q.enqueue([node.left, lvl + 1]);
        if (node.right === null) q.enqueue([new Node(-1), lvl + 1]);
        else q.enqueue([node.right, lvl + 1]);
    }
}

class Data {
    constructor(node, start, end) {
        this.node = node;
        this.start = start;
        this.end = end;
    }
}

function sortedArrayToBST(arr) {
    let n = arr.length;
    if (n === 0) return null;

    let mid = Math.floor((n - 1) / 2);
    let root = new Node(arr[mid]);

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
            q.enqueue(new Data(right, mid + 1, en));
        }
    }
    return root;
}

const arr = [1, 5, 9, 114, 23, 27, 99, 170, 55, 125];
const root = sortedArrayToBST(arr);
levelOrder(root);