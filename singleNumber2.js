{/*
Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/}

function singleNum2(nums){
    const hm = {}

    for(let i = 0; i < nums.length; i++){
        if(hm[nums[i]]){
            hm[nums[i]] += 1
        }else{
            hm[nums[i]] = 1
        }
    }

    for(obj in hm){
        if(hm[obj] === 1){
            return obj
        }
    }
}


singleNum2([2,2,3,2])