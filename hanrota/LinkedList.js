class Node {
  constructor(data, next, prev) {
    this.next = next;
    this.prev = prev;
    this.data = data;
  }
  getNext() {
    return this.next;
  }
  getPrev() {
    return this.prev;
  }
  getData() {
    return this.data;
  }
  setNext(node) {
    this.next = node;
  }
  setPrev(node) {
    this.prev = node;
  }
}
class LinkedList {
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
    // 首尾相接构造环状链表
    next.setNext(root);
    root.setPrev(next);
    return root;
  }
  getNode(index) {
    let data = this.getData(index);
    let node = new Node(data);
    return node;
  }
  getData(index) {
    return index;
  }
}
module.exports = LinkedList;