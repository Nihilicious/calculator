const keys = document.querySelectorAll('button');
const calculation = document.querySelector('.calculation');
const result = document.querySelector('.result');
let num1 = '';
let num2 = '';
let operand = '';
let res = '';




function operate(){
    let clas = this.className;
    let input = this.textContent;
    if(clas === 'num' && !operand && !res){
        num1 += input;
        calculation.textContent = `${num1} ${operand} ${num2}`;
    }else if(clas === 'num' && operand && !res){
        num2 += input;
        calculation.textContent = `${num1} ${operand} ${num2}`;
    }else if(clas === 'operator' && num1 && !operand && !num2 && !res){
        operand = input;
        calculation.textContent = `${num1} ${operand} ${num2}`;
    }else if(clas === 'operator' && res){
        num1 = res;
        operand = input;
        num2 = '';
        res = '';
        calculation.textContent = `${num1} ${operand} ${num2}`;
        result.textContent = res;
    }else if(clas === 'equals'){
        if(operand === '*'){
            res = num1 * num2;
        }else if(operand === '/'){
            res = num1 / num2;
        }else if(operand === '+'){
            res = num1 + num2;
        }else if(operand === '*-'){
            res = num1 - num2;
        };
        calculation.textContent = `${num1} ${operand} ${num2}`;
        result.textContent = '= ' + res;
    }
};

keys.forEach(function(key){
    key.addEventListener('click', operate);
});