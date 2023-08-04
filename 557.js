var reverseWords = function(s) {
    let words = s.split(' ')
    let reversedWords = []

    for(let i = 0; i < words.length; i++){
       let reverseing = words[i].split('').reverse().join('')
       reversedWords.push(reverseing)
    } 

    return reversedWords.join(' ')
};

reverseWords("Let's take LeetCode contest")