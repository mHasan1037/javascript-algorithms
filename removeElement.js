let nums = [3,2,2,3, 2];
let val = 3;

function removeElement(nums, val){
    let newArr = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
           nums[newArr] = nums[i]
           newArr++
        }
    }


    return newArr
}

removeElement(nums, val)