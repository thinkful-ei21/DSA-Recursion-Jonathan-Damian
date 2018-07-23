'use strict';

/////////////////// COUNTING SHEEP ///////////////////

//recursive
const sheepCounterRec = numOfSheep => {
  if (numOfSheep === 0) {
    return;
  }
  console.log(`${numOfSheep} - Another sheep jumped over the fence`);
  sheepCounterRec(numOfSheep - 1);
};

// sheepCounter(5);

// non-recursive
const sheepCounterNon = numOfSheep => {
  for (let i = numOfSheep; i > 0; i--) {
    console.log(`${i} - Another sheep jumped over the fence`);
  }
};
// sheepCounterNon(5);

/////////////////// ARRAY DOUBLE ///////////////////

//recursive
const arrDoublerRec = arr => {
  if (arr.length === 0) {
    return [];
  }
  const newArr = arr[0] * 2;
  return [newArr, ...arrDoublerRec(arr.slice(1))];
};

// console.log(arrDoublerRec([1, 2, 3]));

// non-recursive
const arrDoublerNon = arr => {
  return arr.map(element => element * 2);
};

// console.log(arrDoublerNon([1, 2, 3]));

/////////////////// RESERSE STRING ///////////////////

// recursive
const reverseStrRec = word => {
  if (word === '') {
    return '';
  }
  const newString = word[word.length - 1];
  return newString + reverseStrRec(word.slice(0, -1));
};

// console.log(reverseStrRec('rats'));
// non-recursive

const reverseStrNon = word => {};

// console.log(reverseStrNon('rats'));

/////////////////// Nth TRIAGULAR NUMBER ///////////////////

// recursive
const triangularNumberRec = num => {
  if (num === 0) {
    return 0;
  }
  return num + triangularNumberRec(num - 1);
};

// console.log(triangularNumberRec(6));

// non-recursive
// do ^ here

/////////////////// STRING SPLITTER ///////////////////

// recursive
const splitStrRec = (string, separator) => {
  const separatorIndex = string.indexOf(separator);

  if (string.length === 0) {
    return [];
  }
  if (separatorIndex === -1) {
    return [string];
  }

  return [
    string.slice(0, separatorIndex),
    ...splitStrRec(string.slice(separatorIndex + 1), separator)
  ];
};

// console.log(splitStrRec('here is my string', ' '));

// non-recursive
// do ^ here

/////////////////// BINARY REPRESENTATION ///////////////////

// recursive
const binaryRepRec = num => {
  if (num <= 0) {
    return '';
  }
  return binaryRepRec(Math.floor(num / 2)) + (num % 2);
};

// console.log(binaryRepRec(25));

// non-recursive
// do ^ here

/////////////////// FACTORIAL ///////////////////

// recursive
const factorialRec = num => {
  if (num === 0) {
    return 1;
  }
  return num * factorialRec(num - 1);
};

// console.log(factorialRec(5));

// non-recursive
// do ^ here

/////////////////// FIBONACCI ///////////////////

// recursive
const fibonacciRec = num => {
  const fibSeqArr = [1, 1];
  if (fibSeqArr.length === num) {
    return fibSeqArr;
  }

  let nextNum =
    fibSeqArr[fibSeqArr.length - 2] + fibSeqArr[fibSeqArr.length - 1];
  fibSeqArr.push(nextNum);
  return [...fibSeqArr, ...fibonacciRec(num - 1)];
};

console.log(fibonacciRec(7));

// non-recursive
// do ^ here
