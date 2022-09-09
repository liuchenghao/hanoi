let Node = require("./Node.js");
class LinkedList {
  /**
   * @param {*} num 初始链表节点数
   * @param {*} isCreate 是否创建链表
   */
  constructor(num, isCreate) {
    this.num = num;
    isCreate && (this.root = this.create());
  }
  create() {
    let num = this.num;
    let root;
    let next;
    let prev;
    for (let index = 0; index < num; index++) {
      let node = this.getNode(index);
      if (index) {
        node.setPrev(next);
        next.setNext(node);
        next = node;
      } else {
        root = node;
        next = node;
      }
    }
    // 首尾相接 构造双向循环链表
    next.setNext(root);
    root.setPrev(next);
    return root;
  }
  getNode(index) {
    let data = this.getData(index);
    let node = new Node(data);
    return node;
  }
  /**
   * 
   * @param {*} index 设置节点数据
   * @returns 
   */
  getData(index) {
    return index;
  }
  /**
   * 移除节点
   * @param {*} node 
   */
  remove(node){
    let prev = node.getPrev();
    let next = node.getNext();
    prev.setNext(next);
    next.setPrev(prev);
  }
}
module.exports = LinkedList;