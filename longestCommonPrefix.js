{/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/}

let strs = ["flower","flow","flight"];

function longestCommonPrefix(strs){

    return strs.reduce((prev, next)=>{
        let i = 0;
        
        while(prev[i] && next[i] && prev[i] === next[i]) i++

        return prev.slice(0, i)
    })
}


longestCommonPrefix(strs)