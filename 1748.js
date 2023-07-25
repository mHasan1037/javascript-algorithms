{/*
  1748. Sum of Unique Elements
  You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
  Return the sum of all the unique elements of nums.
*/}


var sumOfUnique = function(root) {
    let hm = {}
    let res = 0

    for(let i = 0; i < root.length; i++){
        if(hm[root[i]]){
            hm[root[i]] += 1
        }else{
            hm[root[i]] = 1
        }
    }

    for(let key in hm){
        if(hm[key] == 1) res += +key
    }
    
    return res
};

sumOfUnique([1,2,3,4,5])