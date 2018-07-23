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
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fibonacciRec(num - 1) + fibonacciRec(num - 2);
};

// console.log(fibonacciRec(3));

// non-recursive
// do ^ here

/////////////////// ANAGRAMS ///////////////////

// recursive
const anagramsRec = (prefix, str) => {
  if (str.length <= 1) {
    console.log(`the anagram is ${prefix}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      let currentLetter = str.substring(i, i + 1);
      let prevLetters = str.substring(0, i);
      let subsequentLetters = str.substring(i + 1);
      anagramsRec(prefix + currentLetter, prevLetters + subsequentLetters);
    }
  }
};

// console.log(anagramsRec('', 'ab'));

// non-recursive
// do ^ here

/////////////////// ANIMAL HIERARCHY ///////////////////

// recursive

const animalHierarchy = [
  { id: 'Animals', parent: null },
  { id: 'Mammals', parent: 'Animals' },
  { id: 'Dogs', parent: 'Mammals' },
  { id: 'Cats', parent: 'Mammals' },
  { id: 'Golden Retriever', parent: 'Dogs' },
  { id: 'Husky', parent: 'Dogs' },
  { id: 'Bengal', parent: 'Cats' }
];

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy
    .filter(item => item.parent === parent)
    .forEach(item => (node[item.id] = traverse(animalHierarchy, item.id)));
  return node;
}
// console.log(traverse(animalHierarchy, null));

// non-recursive
// do ^ here

/////////////////// ORGANIZATION CHART ///////////////////

// recursive
let organization = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {}
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {}
      },
      Badros: {
        John: {},
        Mike: {},
        Pat: {}
      },
      Parikh: {
        Zach: {},
        Ryan: {},
        Tes: {}
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {}
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {}
      },
      Frankovsky: {
        Jasee: {},
        Brian: {},
        Margaret: {}
      }
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {}
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {}
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {}
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {}
      }
    }
  }
};

function goThroughChart(node, indent = 0) {
  for (let key in node) {
    console.log(' '.repeat(indent), key);
    goThroughChart(node[key], indent + 4);
  }
}

console.log(goThroughChart(organization));
// non-recursive
// do ^ here
