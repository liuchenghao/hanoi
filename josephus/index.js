

let LinkedJosephus = require("./LinkedJosephus.js")
function init() {
  let n = 5;
  let m = 3;
  let count = 1;
  let link = new LinkedJosephus(n);
  let root = link.root;
  let next = "getNext";
  let remove = link.remove;
  while (root != root[next]()) {
    if (count % m) {
    } else {
      // let temp = root[next]();
      console.info("remove->", count, root.getData())
      remove(root);
      // root = root.getPrev();
      // root = temp;
    }
    root = root[next]();
    count++;
  }
  console.info("end   ->", root.getData())

}
init();
