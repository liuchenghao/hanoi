class Disc {
  constructor(name, level, piller) {
    this.name = name || "disc";
    this.level = level || 0;
    this.currentPiller = this.fromPiller = piller;
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
let traceList = [];

class Post {
  // bb= "aa";
  constructor(name) {
    this.name = name;
    this.discs = [];
  }
  getName() {
    // console.info(bb)
    return this.name;
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
    /* if (!lastDisc || disc.level < lastDisc.level) {
      this.discs.push(disc);
      return true;
    } */
    return false;
  }
  getLastDisc() {
    let lastIndex = this.discs.length - 1;
    return this.discs[lastIndex];
  }
  remove(disc) {
    let index = this.discs.indexOf(disc);
    // console.info(index, "+++++")
    ~index && this.discs.splice(index, 1);
  }
  move() {

  }
  moveTo(to) {
    let disc = this.getLastDisc();
    if (disc) {
      let formPiller = disc.getFromPiller();
      let currentPiller = disc.getCurrentPiller();
      let oTrace = this.getName() + to.getName() ;//formPiller.getName() + currentPiller.getName();
      let cTrace = to.getName() + this.getName();
      let lastTrace = traceList[traceList.length - 1];

      // console.info(cTrace, "====", lastTrace)
      if(cTrace == lastTrace){
      }else{
      // if (formPiller !== to && currentPiller !== this) {
        let isAdd = to.add(disc);
        if (isAdd) {
          traceList.push(oTrace);
          console.info(disc.getCurrentPiller().getName(), "---->", to.getName())
          disc.setFromPiller(this);
          disc.setCurrentPiller(to);
          this.remove(disc);
        }
      }

      // }
        // return formPiller.getName() + currentPiller.getName();
    }
    return false
  }
  getDiscCount() {
    return this.discs.length;
  }
}
let post1 = new Post("A");
let post2 = new Post("B");
let post3 = new Post("C");

post1.add(new Disc("5", 4, post1));
post1.add(new Disc("4", 3, post1));
post1.add(new Disc("3", 2, post1));
post1.add(new Disc("2", 1, post1));
post1.add(new Disc("1", 0, post1));
let posts = [post1, post2, post3];
let count = post1.getDiscCount();
while (post3.getDiscCount() !== count) {
  let len = posts.length;

  for (let index = 0; index < len; index++) {
    // const element = array[index];
    let from = posts[index];
    // let discs = from.discs;
    // let discLen = discs.length;
    // for (let j = discLen - 1; j >= 0; j--) {
    //   let disc = discs[j];
    if(post3.getDiscCount() == count) break;

    for (let i = len-1; i >= 0; i--) {
    // for (let i = 0; i < len; i++) {
      let to = posts[i];
      if (from == to) {
      } else {
        from.moveTo(to);
        if(post3.getDiscCount() == count) break;
        //         disc.move(from, to);
        console.info(i,post1.getDiscCount(), post2.getDiscCount(), post3.getDiscCount(), "=================")

      }
    }
    // }
    // discs.map(function (disc) {

    // })
  }
}