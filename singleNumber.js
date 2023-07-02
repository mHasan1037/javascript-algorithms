//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums){
    let hm = {}
    let ans = null;
 
    for(let i = 0; i < nums.length; i++){
       if(hm[nums[i]]){
          hm[nums[i]] += 1
       }else{
          hm[nums[i]] = 1
       }
    }
 
    for(obj in hm){
       if(hm[obj] <= 1){
          ans = obj
       }
    }
 
    return ans
 
 }
 
 singleNumber([3,3,1])