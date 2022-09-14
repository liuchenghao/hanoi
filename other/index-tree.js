/* 1.前n-1个移到辅助杆子上。
2.把最后一个移到目标杆子上。
3.把辅助杆子上的移到目标杆子上。
 hanno（n,yuanshi,fuzhu,mubiao）{
             hanno(n-1,yuanshi,mubiao,fuzhu);
             hanno(1,yuanshi,fuzhu,mubiao);
             hanno(n-1,fuzhu,yuanshi,mubiao);
 } */
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.leftChild = left;
    this.rightChild = right;
    // this.count = 1;
  }
  // 先序遍历
  preOrderVisit() {
    // System.out.print("" + value + " ");
    let leftChild = this.leftChild;
    let rightChild = this.rightChild;
    if (leftChild != null) {
      leftChild.preOrderVisit();
    } // Of if
    if (rightChild != null) {
      rightChild.preOrderVisit();
    } // Of if
  }// Of preOrderVisit
  // 中序遍历
  inOrderVisit() {
    let leftChild = this.leftChild;
    let rightChild = this.rightChild;
    if (leftChild != null) {
      leftChild.inOrderVisit();
    } // Of if
    // System.out.print("" + value + " ");
    if (rightChild != null) {
      rightChild.inOrderVisit();
    } // Of if
  }// Of inOrderVisit

  // 后序遍历
  postOrderVisit() {
    let leftChild = this.leftChild;
    let rightChild = this.rightChild;
    if (leftChild != null) {
      leftChild.postOrderVisit();
    } // Of if
    if (rightChild != null) {
      rightChild.postOrderVisit();
    } // Of if
    //System.out.print("" + value + " ");
  }// Of postOrderVisit
  // 得到树的高度
  getDepth() {
    let leftChild = this.leftChild;
    let rightChild = this.rightChild;
    // It is a leaf
    if ((leftChild == null) && (rightChild == null)) {
      return 1;
    } // Of if
    // The depth of the left child.
    let tempLeftDepth = 0;
    if (leftChild != null) {
      tempLeftDepth = leftChild.getDepth();
    } // Of if
    // The depth of the right child.
    let tempRightDepth = 0;
    if (rightChild != null) {
      tempRightDepth = rightChild.getDepth();
    } // Of if

    // 树的高度选取最高的那边+1
    if (tempLeftDepth >= tempRightDepth) {
      return tempLeftDepth + 1;
    } else {
      return tempRightDepth + 1;
    } // Of if
  }// Of getDepth

  // 获得结点数目
  getNumNodes() {
    let leftChild = this.leftChild;
    let rightChild = this.rightChild;
    // If it is a leaf.
    if (leftChild == null && rightChild == null) {
      return 1;
    } // Of if
    // 左孩子的数目
    let templeftNodes = 0;
    if (leftChild != null) {
      templeftNodes = leftChild.getNumNodes();
    } // Of if
    // 友孩子的数目
    let tempRightNodes = 0;
    if (rightChild != null) {
      tempRightNodes = rightChild.getNumNodes();
    } // Of if
    // 总的节点数 = 左孩子数目 + 右孩子数目
    return templeftNodes + tempRightNodes + 1;
  }
}
class Tree {
  constructor(level, rank){
    this.level = level;
    this.rank = rank;
    this.root = this.create(rank); 
  }
  create(rank){
    let root;
    if(rank){
      let level = this.level;
      root = new Node();
      root.data = {
        rank,
        level
      }
      root.leftChild = this.create(rank - 1);
      root.rightChild = this.create(rank - 1);
    }
    return root;
  }
  create1(){
    let rank = this.rank;
    for (let i = 0; i < rank; i++) {
      for (let j = 0; j < rank; j++) {
        
      }
      
    }
  }
}
console.info(JSON.stringify(new Tree(3, 3).root));
