let romanToInt = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000,
    "N" : 10000
}

function  romanToInteger(s){
    let res = 0;
  
    for(let i = 0; i < s.length; i++){
        romanToInt[s[i]] < romanToInt[s[i + 1]] ? res -= romanToInt[s[i]] : res += romanToInt[s[i]]
    }

   return res
}


romanToInteger('VI')