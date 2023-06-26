function palindrome(x){
    if(x < 0) return false

    const reverseNum = +x.toString().split('').reverse().join('')

    let result = x === reverseNum ? true : false
  return result
}

palindrome(121)

