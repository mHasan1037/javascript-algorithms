//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

let jewels = "aA",
stones = "aAAbbbb"

function jewelsStones(jewels, stones){
    let hm = {}
    let count = []

    let jLen = jewels.length;
    let sLen = stones.length;

    for(let i = 0; i < jLen; i++){
        hm[jewels[i]] = true
    }

    for(let i = 0; i < sLen; i++){
        if(hm[stones[i]]){
            count.push(stones[i])
        }
    }

    return count
}

jewelsStones(jewels, stones)





