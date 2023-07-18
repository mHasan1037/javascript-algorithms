var differenceOfSum = function(nums) {
    let eSum = nums.reduce((acc, cur) => acc + cur)

    let dTotal = []

    for(let i = 0; i < nums.length; i++){
        let num = nums[i].toString().split('')
        dTotal.push(...num)
    }
    let dSum = dTotal.reduce((acc, cur) => acc + Number(cur), 0)

    return eSum - dSum
};

differenceOfSum([1,15,6,3])