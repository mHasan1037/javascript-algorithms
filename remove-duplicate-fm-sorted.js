{/*
Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.
*/}

function removeDuplicate(num){
    let index = 1
    let len = num.length - 1
  
    for(let i = 0; i < len; i++){
      if(num[i] !== num[i + 1]){
         num[index] = num[i + 1]
         index++
      }
    }
  
    return num
  }
  
  
  removeDuplicate([0,0,1,1,1,2,2,3,3,4])

