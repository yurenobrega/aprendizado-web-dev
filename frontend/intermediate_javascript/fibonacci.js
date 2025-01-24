function fibonacciGenerator(n){
    output = []
    if (n === 1){
        output = [0]
    } else if (n === 2){
        output = [0, 1]
    } else{
        output = [0, 1]

        for (let i = 2; i < n; i++){
        
        sum = output[output.length - 2]  + output[output.length - 1]
        output.push(sum)
    }
    }

    return output
}

console.log(fibonacciGenerator(10))