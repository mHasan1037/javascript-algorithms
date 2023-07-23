{/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.
*/}

var singleNonDuplicate = function(nums) {
    let hm = {}

    for(let i = 0; i < nums.length; i++){
        if(hm[nums[i]]){
            hm[nums[i]] += 1
        }else{
            hm[nums[i]] = 1
        }
    }

    for(ele in hm){
        if(hm[ele] === 1){
            return  ele
        }
    }
};


singleNonDuplicate([1,1,2,3,3,4,4,8,8])