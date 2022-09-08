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
module.exports = Node;