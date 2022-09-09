

let LinkedJosephus = require("./LinkedJosephus.js")
function init() {
  let m = 16;
  let n = 3;
  let count = 1;
  let link = new LinkedJosephus(m);
  let root = link.root;
  let next = "getNext";
  let remove = link.remove;
  while (root != root[next]() && (root = root[next]())) {
    if (count % n) {
    } else {
      // let temp = root[next]();
      console.info(count, root.getData(), root)
      remove(root);
      // root = root.getPrev();
      // root = temp;
    }
    count++;
  }
  console.info("end:", count, root.getData(), root)

}
init();
