let LinkedList = require("../linkedList/LinkedList.js");
class LinkedJosephus extends LinkedList {
  constructor(num) {
    super(num);
    this.root = this.create();
  }
}
module.exports = LinkedJosephus;