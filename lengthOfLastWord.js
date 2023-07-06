{/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
*/}

function lengthOfLastWord(s){
    let arr = s.trim().split(' ')
    arr = arr[arr.length - 1].length
    return arr
}

lengthOfLastWord('luffy is still joyboy')
