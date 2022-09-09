function init() {
  let m = 16;
  let n = 3;
  let pos = 0;
  for (let i = 2; i <= m; ++i) {
    pos = (pos + n) % i;
  }
  console.info(pos + 1);
}
init();