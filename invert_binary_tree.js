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
let n8 = new Node(4);
let n9 = new Node(10);
let n10 = new Node(11);
let n11 = new Node(13);
let n12 = new Node(16);
let n13 = new Node(19);
let n14 = new Node(21);
let n15 = new Node(30);


searchTree.root = n1;
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
n6.left = n12;
n6.right = n13;
n7.left = n14;
n7.right = n15;

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
  if (!root) return;
  console.log("SEARCHING", number, "ROOT", root.val)
  if (root.val === number) {
    console.log("FOUND", root);
    return root;
  }
    
    if (number < root.val) {
      search(number, root.left);
    } else {
      search(number, root.right);
    }
}

search(25, searchTree.root);
search(19, searchTree.root);
search(11, searchTree.root);
search(17, searchTree.root);
search(10, searchTree.root);
search(30, searchTree.root);

search()

// console.log("ORIGINAL", original, "INVERTED", inverted);

