const keys = document.querySelectorAll('button');
const calculation = document.querySelector('.calculation');
const result = document.querySelector('.result');
let num1 = '';
let num2 = '';
let operand = '';
let res = '';

function calculate(num1, operand, num2){
    if(operand === '*'){
            res = num1 * num2;
        }else if(operand === '/'){
            res = num1 / num2;
        }else if(operand === '+'){
            res = num1*1 + num2*1;
        }else if(operand === '-'){
            res = num1 - num2;
        };
}

function update(num1, operand, num2, res){
    calculation.textContent = `${num1} ${operand} ${num2}`;
    result.textContent = res;
}


function operate(){
    let clas = this.className;
    let input = this.textContent;

    if(clas === 'clear'){
        num1 = '';
        operand = '';
        num2 = '';
        res = '';
        update(num1, operand, num2, res);
    }else if(clas === 'undo'){
        if(res){
            num1 = '';
            operand = '';
            num2 = '';
            res = '';
            update(num1, operand, num2, res);
        }else if(num2){
           num2 = num2.slice(0, (num2.length - 1));
        }else if(num1 && !operand){
            num1 = num1.slice(0, (num1.length - 1));
        }else if(num1 && operand){
            operand = '';
        }
        update(num1, operand, num2, res);
    }else if(num1 && !operand && input === '.' && num1.includes('.')){
    }else if(num2 && input === '.' && num2.includes('.')){
    }else if(clas === 'num' && res){
        num1 = res;
        operand = '';
        num2 = '';
        res = '';
        update(num1, operand, num2, res);
    }else if(clas === 'num' && !operand && !res){
        num1 += input;
        update(num1, operand, num2, res);
    }else if(clas === 'num' && operand && !res){
        num2 += input;
        update(num1, operand, num2, res);
    }else if(clas === 'operator' && num1 && !operand && !num2 && !res){
        operand = input;
        update(num1, operand, num2, res)
    }else if(clas === 'operator' && res){
        num1 = res;
        operand = input;
        num2 = '';
        res = '';
        update(num1, operand, num2, res)
    }else if(clas === 'operator' && num2 && !res){
        calculate(num1, operand, num2);
        num1 = res;
        operand = input;
        num2 = '';
        res = '';
        update(num1, operand, num2, res)
        
    }else if(clas === 'equals'){
        calculate(num1, operand, num2);
        update(num1, operand, num2, res)
    }
};

keys.forEach(function(key){
    key.addEventListener('click', operate);
});