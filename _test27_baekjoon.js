const array = [];
const nineNum = [];
for (let i = 1; i <= 100; i++) {
  array.push(i);
}
for (let i = 0; i < 9; i++) {
  nineNum.push(array.splice(Math.ceil(Math.random() * array.length), 1)[0]);
}
const sorted = nineNum.slice().sort((a, b) => a - b)[nineNum.length - 1];
console.log(nineNum.indexOf(sorted) + 1);
