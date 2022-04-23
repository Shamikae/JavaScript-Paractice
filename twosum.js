// Given an array of integers and a target number, return the two integers that add up to the target number

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// time O(N^2)
// space O(1) constant 
var nums = [2,7,11,15];
var target = 9;

var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target))

// hashmap
 // time O(N)
 // space O(N)

 var twoSums = function (nums, target) {
     var map = {};
     for (var i = 0; i < nums.length; i++){
         var value = nums[i];
         var pair = target - value;
         if (map[pair] !== undefined){
             return [map[pair], i];
         } else {
             map[value] = i;
         }
     }
 }

 console.log(twoSums(nums, target))