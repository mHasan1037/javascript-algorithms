/*
Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.
Return the selected integer.
*/

var findNonMinOrMax = function(nums) {
    let newNums = nums.sort((a, b) => a - b)
 
   if(newNums.length <= 2){
     return -1
   }else{
     return newNums[1]
   }
 };