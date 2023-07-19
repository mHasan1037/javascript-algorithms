var separateDigits = function(nums) {
    let answer = []
    for(let i = 0; i < nums.length; i++){
        let arr = nums[i].toString().split("")
        answer.push(...arr)
    }

    return answer
};

separateDigits([7,1,3,9])