{/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. 
*/}

var fib = function(n) {
    let arr = [0, 1]

    for(let i = 2; i <= n; i++){
        arr.push(arr[i - 1] + arr[i - 2])
    }

    return arr[n]
};

fib(3)