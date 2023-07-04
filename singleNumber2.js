
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