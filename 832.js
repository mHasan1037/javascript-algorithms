/*
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
To flip an image horizontally means that each row of the image is reversed.
For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
For example, inverting [0,1,1] results in [1,0,0].
*/

var flipAndInvertImage = function(image) {
    let ans = []

    for(let i = 0; i < image.length; i++){
        let reversed = image[i].reverse()

        for(let j = 0; j < image.length; j++){
            if(reversed[j] === 0){
                reversed[j] = 1
            }else{
                reversed[j] = 0
            }
           
        }
        
        ans.push(reversed)
    }
    
    return ans
};