/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []

    for (const element of tokens) {
        if(!isNaN(element)){
              stack.push(Number(element))

        }else{
            const num1 = stack.pop()
            const num2 = stack.pop()

        switch(element) {
            case "+":  
                stack.push(num2+num1)
            break;

            case "-": 
                stack.push(num2-num1)
            break;

            case "/": 
                stack.push(Math.trunc(num2/num1))
            break;

            case "*":
                stack.push(num2*num1)
            break;

        }   

    }
        }
    return stack.pop()
}
