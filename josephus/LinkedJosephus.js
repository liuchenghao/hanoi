let LinkedList = require("../linkedList/LinkedList.js");
class LinkedJosephus extends LinkedList {
  constructor(num) {
    super(num);
    this.root = this.create();
  }
  getData(index) {
    return index + 1;
  }
}
module.exports = LinkedJosephus;