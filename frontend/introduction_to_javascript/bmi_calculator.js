function bmiCalculator(weight, height){
    return weight / Math.pow(height, 2)
}

bmi = bmiCalculator(65, 1.8)

console.log(bmi)