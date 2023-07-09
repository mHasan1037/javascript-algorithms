{/*
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
For each index i, names[i] and heights[i] denote the name and height of the ith person.
Return names sorted in descending order by the people's heights.
*/}


const names = ["Alice","Bob","Bob"]
const heights = [155,185,150]

var sortPeople = function(names, heights) {
    let hm = []
    let len = heights.length

    for(let i = 0; i < len; i++){
        hm.push([names[i], heights[i]])
    }

    hm.sort((a, b)=> b[1] - a[1])

    const sortedKeys = hm.map(([key, value]) => key) 

    return sortedKeys
};

sortPeople(names, heights)