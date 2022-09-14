function init1() {
  // m 人数 n 移动次数
  let m = 10;
  let n = 3;
  let pos = 0;
  for (let i = 2; i <= m; i++) {
    pos = (pos + n) % i;
    console.info(pos);
  }
  console.info(pos + 1);
}
function init2() {
  // m 人数 n 移动次数
  let m = 10;
  let n = 3;
  let pos = 0;
  for (let i = m; i >= 2; i--) {
    pos = (pos + n) % i;
    console.info(pos);
  }
  console.info(pos + 1);
}
function init() {
  // m 人数 n 移动次数
  let m = 10;
  let n = 3;
  // let pos = 0;
  for (let i = 1; i <= m; i++) {
    let pos = m % n;
    // pos = (pos + n) % i;
    console.info(pos + 1);
  }
  console.info(pos + 1);
}
init1();