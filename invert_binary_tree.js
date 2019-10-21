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

let searchTree = new BinaryTree()
let n1 = new Node(15);
let n2 = new Node(10);
let n3 = new Node(20);
let n4 = new Node(8);
let n5 = new Node(12);
let n6 = new Node(17);
let n7 = new Node(25);


searchTree.root = n1;
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

let original = [];
//iterate over tree and print nodes
function treePrint(root) {
  if (root) {
    original.push(root.val)
    return treePrint(root.left), treePrint(root.right);
  }
}

// treePrint(searchTree.root);

let inverted = [];

function invertTree(root) {
  if (root) {
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
  }

  return root;
};

// invertTree(searchTree.root)

//search method for binary search tree
function search(number, root) {
  console.log("NUMBER", number, "ROOT", root.val)
  if (!root) return;
  if (root.val === number) {
    console.log("FOUND", root);
    return root;
  }
    
    if (number < root.right.val) {
      search(number, root.left);
    } else {
      search(number, root.right);
    }
}

search(25, searchTree.root);

search()

// console.log("ORIGINAL", original, "INVERTED", inverted);

