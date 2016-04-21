// Sum all numbers in a range

function sumAll(arr) {
  var min = Math.min.apply(null, arr),
      max = Math.max.apply(null, arr),
      newArr = [];

  while (min <= max) {
    newArr.push(min);
    min++;
  }

  return newArr.reduce(function(prev, curr) {
    return prev + curr;
  });
}

sumAll([10, 5]);
