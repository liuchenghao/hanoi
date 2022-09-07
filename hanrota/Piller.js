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
module.exports = Piller;