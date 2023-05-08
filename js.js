const nums = document.querySelector('.numbers');
const last = document.querySelector('.lasts');
const ops = document.querySelector('.operands');


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lasts = ['.', 0, '='];
const operands =['*', '/', '+', '-'];

for(let i = 0; i<numbers.length; i++){
    numbers[i] = document.createElement('button');
    numbers[i].classList.add('number');
    numbers[i].textContent = `${i + 1}`;
    nums.appendChild(numbers[i]);
};

let temp = '';

for(let i = 0; i<lasts.length; i++){
    temp = lasts[i];
    lasts[i] = document.createElement('button');
    if(temp === 0){
        lasts[i].classList.add('number');
    }else if(temp === '.'){
        lasts[i].classList.add('boolinator');
    }else{
        lasts[i].classList.add('equals');
    };
    lasts[i].textContent = temp;
    last.appendChild(lasts[i]);
}

for(let i = 0; i<operands.length; i++){
    temp = operands[i];
    operands[i] = document.createElement('button');
    operands[i].classList.add('operand');
    operands[i].textContent = temp;
    ops.appendChild(operands[i]);
};