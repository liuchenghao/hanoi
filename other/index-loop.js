
/* 若n为奇数，按顺时针方向依次摆放 A C B。
（1）按顺时针方向把圆盘1从现在的柱子移动到下一根柱子，即当n为偶数时，若圆盘1在柱子A，则把它移动到B；
若圆盘1在柱子B，则把它移动到C；若圆盘1在柱子C，则把它移动到A。
（2）接着，把另外两根柱子上可以移动的圆盘移动到新的柱子上。
即把非空柱子上的圆盘移动到空柱子上，当两根柱子都非空时，移动较小的圆盘
这一步没有明确规定移动哪个圆盘，你可能以为会有多种可能性，其实不然，可实施的行动是唯一的。
（3）反复进行（1）（2）操作，最后就能按规定完成汉诺塔的移动。 */
let piller = ['a', 'b', 'c']
let disc = [[3, 2, 1], [], []];
function move(from, to) {
  let discF = disc[from];
  let discT = disc[to];
  if (discF.length) {
    if (discT.length) {
      let lastF = discF[discF.length - 1];
      let lastT = discT[discT.length - 1];
      if (lastT < lastF) {
        return false;
      }
    }
    let last = discF.pop();
    discT.push(last);
    console.info(piller[from], " -> ", piller[to], disc, last)
    return true;
  } else {
    return false;
  }
}
function init() {
  let count = 0;
  while (++count) {
    let index = 0;
    let from = (count - 1) % 3 + index;
    let to = (count) % 3 + index;
    let buffer = (count + 1) % 3 + index;
    console.info(count)
    move(from, to);
    if (!move(from, buffer) && !move(buffer, from)) break;
  }
}
init();