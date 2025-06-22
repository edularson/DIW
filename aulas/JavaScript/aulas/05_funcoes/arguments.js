function soma(n1, n2){
    return n1 + n2
}

function somaArray(arr){
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}

function somarArguments(){
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}

console.log(soma(1,2))
console.log(somaArray([1,2,4]))
console.log(somarArguments(1,2,4,8,10))
