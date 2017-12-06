const async = require('async');

let progress = 0;
function getCombinations0(arr, size, depth = 0, stack = []) {
  return new Promise((resolve, reject) => {
    // console.log(`${JSON.stringify(arr)},${size},${depth},${JSON.stringify(stack)}`);
    console.log(progress);
    if (depth >= size) {
      progress += 1;
      resolve(stack);
    } else {
      let results = [];
      async.each(arr, (item, next) => {
        getCombinations(arr, size, depth + 1, stack.concat(item)).then((innerResult) => {
          results = results.concat(innerResult);
          next();
        }).catch((err) => {
          next(err);
        });
      }, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    }
  });
}

function getCombinations1(arr, size) {
  const results = [];
  for (let i = 0; i < arr.length; i += 1) {
    let sum = 0;
    let end = i + size;
    let overflow = false;
    let overflowEnd = 0;
    if (end > arr.length) {
      overflow = true;
      overflowEnd = end - arr.length;
      end = arr.length;
    }
    for (let a = i; a < end; a += 1) {
      sum += arr[a];
    }
    if (overflow) {
      for (let b = 0; b < overflowEnd; b += 1) {
        sum += arr[b];
      }
    }
    results.push(sum);
  }
  return results;
}

function getCombinations(arr, size) {
  const combinations = [];
  const rows = [];
  const positions = [];

  // Create x "rows", where x is size
  let i = 0;
  while (i < size) {
    // Create an identical copy of the original array & add it as a new "row"
    const copy = arr.slice(0);
    rows.push(copy);

    // This will populate "positions" with an increasing number for each row
    positions.push(i);
    i += 1;
  }

  let run = 0;
  while (run < 20) {
    console.log(positions);
    const combo = [];
    for (let row = 0; row < rows.length; row += 1) {
      combo.push(rows[row][positions[row]]);
    }
    combinations.push(combo);
    positions[positions.length - 1] += 1;
    for (let position = positions.length - 1; position >= 0; position -= 1) {
      if (positions[position] >= arr.length) {
        positions[position - 1] += 1;
        positions[position] = positions[position - 1];
      }
    }
    run += 1;
  }

  // return combinations;
}

console.log(getCombinations([1, 2, 3, 4, 5, 6], 4));
