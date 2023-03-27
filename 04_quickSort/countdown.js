function countDown(num) {
  console.log(num);
  return num <= 0 ? null : countDown(num - 1);
}

console.log(countDown(5));
