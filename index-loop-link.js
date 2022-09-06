
/* 若n为奇数，按顺时针方向依次摆放 A C B。
（1）按顺时针方向把圆盘1从现在的柱子移动到下一根柱子，即当n为偶数时，若圆盘1在柱子A，则把它移动到B；
若圆盘1在柱子B，则把它移动到C；若圆盘1在柱子C，则把它移动到A。
（2）接着，把另外两根柱子上可以移动的圆盘移动到新的柱子上。
即把非空柱子上的圆盘移动到空柱子上，当两根柱子都非空时，移动较小的圆盘
这一步没有明确规定移动哪个圆盘，你可能以为会有多种可能性，其实不然，可实施的行动是唯一的。
（3）反复进行（1）（2）操作，最后就能按规定完成汉诺塔的移动。 */
class Disc {
  constructor(level, name, piller) {
    this.level = level || 0;
    this.name = name || this.level;
    // this.currentPiller = this.fromPiller = piller;
  }
  getName() {
    return this.name;
  }
  getLevel() {
    return this.level;
  }
  setCurrentPiller(piller) {
    this.currentPiller = piller;
  }
  setFromPiller(piller) {
    this.fromPiller = piller;
  }
  getFromPiller() {
    return this.fromPiller;
  }
  getCurrentPiller() {
    return this.currentPiller;
  }
  move(from, to) {
    let isAdd = to.add(this);
    isAdd && from.remove(this);
  }
}
class Piller {
  constructor(index, discs) {
    this.index = index || 0;
    this.discs = discs || [];
  }
  getName() {
    let index = this.index;
    let code = 65 + index;
    return String.fromCharCode(code);
  }
  add(disc) {
    let lastDisc = this.getLastDisc();
    if (lastDisc) {
      if (disc.level < lastDisc.level) {
        this.discs.push(disc);
        return true;
      }
    } else {
      this.discs.push(disc);
      return true;
    }
    return false;
  }
  getLastDisc() {
    let lastIndex = this.discs.length - 1;
    return this.discs[lastIndex];
  }
  remove(disc) {
    let index = this.discs.indexOf(disc);
    ~index && this.discs.splice(index, 1);
  }
  move() {

  }
  moveTo(to) {
  }
  getDiscCount() {
    return this.discs.length;
  }
}
let piller = ['a', 'c', 'b']
let disc = [[3, 2, 1], [], []];
function move(from, to) {
  let discF = disc[from];
  let discT = disc[to];
  if (discF.length) {
    // console.info(lastF,from,"======", to, discF)
    if (discT.length) {
      let lastF = discF[discF.length - 1];
      let lastT = discT[discT.length - 1];
      if (lastT < lastF) {
        return false;
      }
    }
    let last = discF.pop();
    discT.push(last);
    console.info(piller[from], " -> ", piller[to], disc, last)
    return true;
  } else {
    return false;
  }
  // if(disc[to]){

  // }
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
    // this.next = next;
    // this.prev = prev;
    // this.data = data;
    this.num = num;
    // this.root = this.init(num);
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
        /* next.setNext(node);
        // next.setPrev(prev);
        node.setNext(root);
        // node.setPrev()
        next = node;
        prev = node; */
        node.setPrev(next);
        next.setNext(node);
        next = node;
      } else {
        /* root = node;
        root.setNext(root);
        root.setPrev(root);
        next = root;
        prev = root; */
        root = node;
        next = node;
      }
      // let node = this.getNode(index);
      // let next = this.getNode(index + 1)
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
    // console.info(this, discs, this.level)
    return new Piller(index, discs);
  }
  move(from, to) {
    let discF = from.data.discs;
    let discT = to.data.discs;
    // console.info(from,"======", to, discF)

    if (discF.length) {
      if (discT.length) {
        let lastF = discF[discF.length - 1].level;
        let lastT = discT[discT.length - 1].level;
        if (lastT < lastF) {
          return false;
        }
      }
      let last = discF.pop();
      discT.push(last);
      console.info(from.data.getName(), " -> ", to.data.getName())
      // console.info(from.data.getName(), " -> ", to.data.getName(), from.data, to.data)
      return true;
    } else {
      return false;
    }
    // if(disc[to]){
  
    // }
  }
}
function init() {
  let count = 0;
  // std::cin >> N;
  // for (int i = 0; i < N; i++)
  // 	a[1].push(N - i);
  // if (N % 2 == 1) {
  // 	s[2] = 'c'; s[3] = 'b';
  // }
  while (++count) {
    let index = 0;
    let from = (count - 1) % 3 + index;
    let to = (count) % 3 + index;
    let buffer = (count + 1) % 3 + index;
    console.info(count)
    move(from, to);
    if (!move(from, buffer) && !move(buffer, from)) break;
  }
}
function init1() {
  let link = new LinkedPiller(3, 6);
  let root = link.root;
  let move = link.move;
  let count = 0;
  while ( root = root.getPrev()) {
    // let index = 0;
    let from = root.getNext();
    let to = root;
    let buffer = root.getPrev();
    // console.info(count, from, to, buffer)
    move(from, to);
    if (!move(from, buffer) && !move(buffer, from)) break;
  }
  // console.info(link.root)
  // console.info(link.root.next.data.getName())
}
init1();
/* char s[4] = { 'q', 'a', 'b', 'c' };
std:: stack < int > a[4];
bool move(int before, int after) {
  if (a[before].empty())
    return false;
  if (!a[after].empty())
    if ((a[after].top() - a[before].top()) < 0)
      return false;
  a[after].push(a[before].top());
  a[before].pop();
  printf("%c -> %c\n", s[before], s[after]);//faster than cout
  return true;
}
int main() {
  int  N, count = 0;
  std:: cin >> N;
  for (int i = 0; i < N; i++)
  a[1].push(N - i);
  if (N % 2 == 1) {
    s[2] = 'c'; s[3] = 'b';
  }
  while (++count) {
    move((count - 1) % 3 + 1, (count) % 3 + 1);
    if (!move((count - 1) % 3 + 1, (count + 1) % 3 + 1) && !move((count + 1) % 3 + 1, (count - 1) % 3 + 1))
      break;
  }
} */