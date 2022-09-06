
/* 若n为奇数，按顺时针方向依次摆放 A C B。
（1）按顺时针方向把圆盘1从现在的柱子移动到下一根柱子，即当n为偶数时，若圆盘1在柱子A，则把它移动到B；
若圆盘1在柱子B，则把它移动到C；若圆盘1在柱子C，则把它移动到A。
（2）接着，把另外两根柱子上可以移动的圆盘移动到新的柱子上。
即把非空柱子上的圆盘移动到空柱子上，当两根柱子都非空时，移动较小的圆盘
这一步没有明确规定移动哪个圆盘，你可能以为会有多种可能性，其实不然，可实施的行动是唯一的。
（3）反复进行（1）（2）操作，最后就能按规定完成汉诺塔的移动。 */
class Disc {
  constructor(level, name) {
    this.level = level || 0;
    this.name = name || this.level;
  }
  getName() {
    return this.name;
  }
  getLevel() {
    return this.level;
  }
}
class Piller {
  constructor(index, discs) {
    this.index = index || 0;
    this.discs = discs || [];
  }
  // 转化piller的name
  getName() {
    let index = this.index;
    let code = 65 + index;
    return String.fromCharCode(code);
  }
  add(disc) {
    this.discs.push(disc);
  }
  getLastDisc() {
    let lastIndex = this.discs.length - 1;
    return this.discs[lastIndex];
  }
  remove() {
    return this.discs.pop();
  }
  moveTo(to) {
    let countF = this.getDiscCount();
    let countT = to.getDiscCount();
    if (countF) {
      if (countT) {
        let lastF = this.getLastDisc();
        let lastT = to.getLastDisc();
        if (lastT.getLevel() < lastF.getLevel()) {
          return false;
        }
      }
      let last = this.remove();
      to.add(last);
      console.info(this.getName(), " -> ", to.getName())
      // console.info(this.getName(), " -> ", to.getName(),this,  to)
      return true;
    } else {
      return false;
    }
  }
  getDiscCount() {
    return this.discs.length;
  }
}
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
class LinkedPiller extends LinkedList {
  constructor(num, level) {
    super(num);
    this.level = level;
    this.root = this.create();
  }
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
function init() {
  let rank = 3;
  let level = 3;
  let link = new LinkedPiller(rank, level);
  // 0 顺时针循环 1 逆时针循环
  let isClockWise = level % 2;
  let next = isClockWise? "getPrev": "getNext";
  let prev = isClockWise? "getNext": "getPrev";
  let root = link.root;
  let move = link.move;
  while (root = root[next]()) {
    let from = root[prev]();
    let to = root;
    let buffer = root[next]();
    move(from, to);
    if (!move(from, buffer) && !move(buffer, from)) break;
  }
}
init();