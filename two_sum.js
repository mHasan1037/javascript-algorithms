{/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
*/}

let nums = [3,2,4]
    target = 6

function two_sum(nums, target){
    let len = nums.length

    for(let i = 0; i < len; i++){
        for(let j = i + 1; j < len; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }

}

two_sum(nums, target)