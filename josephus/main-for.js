function init() {
  // m 人数 n 移动次数
  let m = 5;
  let n = 3;
  let pos = 0;
  let arr = [];
  for (let i = 0; i < m; i++) {
    arr.push(i + 1);
  }
  for (let i = 0; i < m; i++) {
    // 计算删除元素后的数组下标
    pos = (pos + n - 1) % (m - i);
    let elm = arr[pos];
    // 删除元素
    arr.splice(pos, 1);
    console.info("remove->", pos, elm);
  }
}
init();