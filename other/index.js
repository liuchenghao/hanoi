
/* 
当n>1时，我们把n个盘从第一根柱子移动到第三根柱子，可以分为三个步骤：
  1.把上面的n-1个盘从第一根柱子移动到第二根柱子
  2.把最大的盘从第一根柱子移动到第三根柱子
  3.把那n-1个盘从第二根柱子移动到第三根柱子

*/

function hanno(n, from, buffer, to) {
  if (n == 1) {
    console.info(from, " -> ", to)
  } else {
    hanno(n - 1, from, to, buffer);
    hanno(1, from, buffer, to);
    hanno(n - 1, buffer, from, to);
  }
}
hanno(5, 'a', 'b', 'c');
