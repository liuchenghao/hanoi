// 通过递推公式计算最后一个删除的数字
function init() {
  // m 人数 n 移动次数
  let m = 5;
  let n = 3;
  let pos = 0;
  for (let i = 2; i <= m; i++) {
    pos = (pos + n) % i;
    // console.info(pos);
  }
  console.info("end:", pos + 1);
}
init();