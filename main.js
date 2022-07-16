// 1) Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function maxElementProduct(inputArray){
    let arr = inputArray
    let x = 0
    let y = 0
    let result = 0
    for(let i = 0; i < arr.length; i++){
        x = arr[i]
        y = arr[i + 1]
        if(x*y>result){
            result = x*y
        }
    }
    return result
}

console.log(maxElementProduct([10,20,5,36,15,80]));



// 2) Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

function missingNumCount(arr){
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    let result = 0
    for(let i = min; i <= max; i++){
        if(arr.indexOf(i) === -1){
            result += i
        }
    }
    return result
}

console.log(missingNumCount([5,7,3,10,6,18,21]));



// 3) Convert a long phrase to its acronym.

function convertStr(str){
    let arrStr = str.split(" ")
    let acronym = ""
    for(let i = 0; i < arrStr.length;i++){
        if(arrStr.length > 1){
            acronym += arrStr[i].charAt(0)
        }else return "There are no abbreviations for one word"
    }
    return acronym.toUpperCase()
}

console.log(convertStr("Have a good night"));



// 4) Given a string of digits, output all the contiguous substrings of length n in that string.

function myFunc(str,n){
    let arr = str.split("")
    let newArr = []
    let newStr = ""
    while(arr.length >= n){
       for(let j = 0; j < n; j++){
        newStr += arr[j]
        
       }
       newArr.push(newStr.split(" "))
       newStr = ""
       arr.shift()
    }
    return newArr.join(", ")
    
}

console.log(myFunc("495215", 3));



// 5) Given a word, compute the scrabble score for the given word. To calculate scrabble score use the following table of scores:

function myScrabble(str){
    let arr = [null,"aeioulnrst","dg","bcmp","fhvwy","k","j,x","qz"]
    let result = 0
    for(let i = 1; i < arr.length;i++){
            let myStr = arr[i]
            for(let j = 0; j < str.length; j++){
                for(let t = 0; t < myStr.length; t++){
                    if(myStr[t] === str[j]){
                        result += i
                        break
                    }
                }
            }
    }
    return result
}

console.log(myScrabble("quick"));



// 7) Create an implementation of the rotational cipher, also sometimes called the Caesar cipher. The Caesar cipher is a simple shift cipher that relies on transposing all the letters
//    in the alphabet using an integer key between 0 and 26. Using a key of 0 or 26 will
//    always yield the same output due to modular arithmetic. The letter is shifted for as many values as the value of the key.

function caesarCipher(str){
    const plain = "abcdefghijklmnopqrstuvwxyz"
    const cipher = "nopqrstuvwxyzabcdefghijklm"
    let result = []
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < plain.length;j++){
            if(str[i] === plain[j]){
                result.push(cipher[j])
            }
        }
    }
    return result.join("")
}

console.log(caesarCipher("abcdefghijklmnopqrstuvwxyz"));


