let calculator = {
    total: 0,
    add: function (number) {
        this.total += number
    },
    subtract: function (number) {
        this.total -= number
    },
    multiply: function (number) {
        this.total *= number
    },
    divide: function (number) {
        this.total /= number
    },
    operations: {
        'add': 0,
        'subtract': 0,
        'multiply': 0,
        'divide': 0,
    }
}

calculator.execute = function (key) {
    let methodName = calculator[key]
    let functionParams = [].splice.call(arguments, 1)
    return methodName.apply(calculator, functionParams)
}

const methods = ['add', 'subtract', 'multiply', 'divide']
let randomMethodKey, methodToExecute, randomNumber

while (calculator.total < 1 || Math.round(calculator.total) % 10000 !== 0) {
    const randomMethodKey = Math.floor((Math.random() * 4))
    const methodToExecute = methods[randomMethodKey]
    const randomNumber = Math.floor((Math.random() * 8) + 1)

    // increment operations
    calculator.operations[methodToExecute]++
    calculator.operations['total']++

    // increment operations
    calculator.execute(methodToExecute, randomNumber)
}

console.log(calculator.total)