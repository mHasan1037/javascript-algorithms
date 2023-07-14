{/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/}


var sortedSquares = function(nums) {
    let newNum = []

    for(let i = 0; i < nums.length; i++){
        newNum.push(nums[i] * nums[i])
    }

    newNum.sort((a, b) =>a - b)

    return newNum
};

sortedSquares([-4,-1,0,3,10])