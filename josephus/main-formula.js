// 通过递推公式计算最后一个删除的数字
function init() {
  // n 人数 m 移动次数
  let n = 5;
  let m = 3;
  let pos = 0;
  for (let i = 2; i <= n; i++) {
    pos = (pos + m) % i;
    // console.info(pos);
  }
  console.info("end:", pos + 1);
}
init();