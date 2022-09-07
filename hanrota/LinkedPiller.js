let Disc = require("./Disc.js");
let Piller = require("./Piller.js");
let LinkedList = require("./LinkedList.js");
class LinkedPiller extends LinkedList {
  constructor(num, level) {
    super(num);
    this.level = level;
    this.root = this.create();
  }
  // 链表节点內数据
  getData(index) {
    let discs = [];
    if (!index) {
      let level = this.level;
      for (let i = 0; i < level; i++) {
        let disc = new Disc(i);
        discs.push(disc);
      }
      discs.reverse();
    }
    return new Piller(index, discs);
  }
  move(from, to) {
    let pillerF = from.getData();
    let pillerT = to.getData();
    return pillerF.moveTo(pillerT);
  }
}
module.exports = LinkedPiller;