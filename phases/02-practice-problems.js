// const HashTable = require('./01-implementation');

function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let word1 = {};

  for (let letter of str1) {
    if (letter in word1) word1[letter]++
    else word1[letter] = 1;
  }
  for (let letter of str2) {
    if (!(letter in word1)) return false;
  }
  return true;
}


function commonElements(arr1, arr2) {
  let result = []
  let objArr1 = {};
  for (let num of arr1) {
    if (num in objArr1) objArr1[num]++
    else objArr1[num] = 1;
  }
  for (let num of arr2) {
    if (num in objArr1) result.push(num);
  }
  return result;
}


function duplicate(arr) {
  let objArr1 = {};
  for (let num of arr) {
    if (num in objArr1) objArr1[num]++
    else objArr1[num] = 1;
  }
  for (let key in objArr1) {
    if (objArr1[key] > 1) return Number(key);
  }
}


function twoSum(nums, target) {
  const obj = {};
  for (let num of nums) {
    let factor = target - num;
    if (factor in obj) {
      return true;
    } else {
      obj[num] = factor;
    }
  }
  return false;
}


function wordPattern(pattern, strings) {
  const obj1 = {};
  const obj2 = {};
  let counter = 0;
  // for (let char of pattern) {
  //   if (char in pattern)
  // }
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
