var list = []
for(var i = 1; i < 101; i++){
    if(i % 3 === 0 && i % 5 === 0){
        list.push("fizzbuzz")
    }
    else if (i % 3 === 0){
        list.push("fizz")
    }
    else if(i % 5 === 0){
        list.push("buzz")
    }
    else{
        list.push(i)
    }
}
console.log(list)