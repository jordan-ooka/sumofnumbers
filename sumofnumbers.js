const testList = [1, 2, 3];

function sumFor(list) {
  let total = 0;
  for (let num of list) {
    total = total + num;
  }
  return total;
}

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total = total + list[i];
    i++;
  }
  return total;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  else {
    return list[0] + sumRecursion(list.slice(1, list.length));
  }

}

function sumTheSimpleWay(list) {
  return _.reduce(list, function(memo,num){return memo + num;},0);

}

console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
console.log(sumTheSimpleWay(testList));