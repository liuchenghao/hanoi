//
function init() {
  // n 人数 m 移动次数
  let n = 5;
  let m = 3;
  let pos = 0;
  let arr = [];
  // 初始化数组
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  for (let i = 0; i < n; i++) {
    // 计算删除元素后的数组下标
    pos = (pos + m - 1) % (n - i);
    let elm = arr[pos];
    // 删除元素
    arr.splice(pos, 1);
    console.info("remove->", pos, elm);
  }
}
init();