class BinaryTree {
  constructor() {
    this.root = null;
  }
}

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinaryTree()
let n1 = new Node(5);
let n2 = new Node(11);
let n3 = new Node(20);
let n4 = new Node(7);
let n5 = new Node(4);
let n6 = new Node(35);
let n7 = new Node(6);
let n8 = new Node(5);
let n9 = new Node(2);
let n10 = new Node(14);
let n11 = new Node(1);


tree.root = n1;
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n4.left = n8;
n4.right = n9;
n5.left = n10;
n5.right = n11;

let original = [];
//iterate over tree and print nodes
function treePrint(root) {
  if (root) {
    original.push(root.val)
    return treePrint(root.left), treePrint(root.right);
  }
}

treePrint(tree.root);

let inverted = [];

function invertTree(root) {
  if (root) {
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
  }

  return root;
};

invertTree(tree.root)

console.log("ORIGINAL", original, "INVERTED", inverted);

