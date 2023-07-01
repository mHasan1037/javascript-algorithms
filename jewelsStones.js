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