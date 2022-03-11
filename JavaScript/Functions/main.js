//Check legal age
function checkAge(age) {
    if (age >= 18) {
        return true
    }
    else {
        return confirm('Do you have permission from your parents?')
    }
}

let age = prompt('How old are you?', 18)

if (checkAge(age)) {
    alert('Access granted')
}
else {
    alert('Access denied')
}

document.querySelector('button').addEventListener('click', showMovie(age))

function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }
    else {
      alert('Showing you the movie')
    }  
    
}

//Check prime numbers
function showPrime(n) {
    nextPrime: for(let i=2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime
        }
        alert(i);
    }
}

//Power factor computation
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
     return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }

///Callback function
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}
let showOk = function() {
  alert('You agreed')
};

let showCancel = function() {
  alert('You disagreed')
};

let yesNo = `something`;
function nYNN() {
    while(yesNo != `yes` && yesNo != `no`) {
        yesNo = prompt(`neither yes nor no`);
}}


//Calculator
let total= 0
let num1= ''
let num2= ''
let operator=''
let display=''

document.querySelector('#clickZone').addEventListener('click', displayCalc)

document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)

document.querySelector('#plus').addEventListener('click', plus)
document.querySelector('#minus').addEventListener('click', minus)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#equals').addEventListener('click', equals)
document.querySelector('#divide').addEventListener('click', divide)
document.querySelector('#clear').addEventListener('click', clear)


function zero(){
  if(operator == ''){
    num1= num1 + '0'
  }
  else{
  num2= num2 + '0'
  }
}


function one(){
  if(operator == ''){
    num1= num1 + '1'
  }
  else{
  num2= num2 + '1'
  }
}

function two(){
  if(operator == ''){
    num1= num1 + '2'
  }
  else{
  num2= num2 + '2'
  }
}

function three(){
  if(operator == ''){
    num1= num1 + '3'
  }
  else{
  num2= num2 + '3'
  }
}

function four(){
  if(operator == ''){
    num1= num1 + '4'
  }
  else{
  num2= num2 + '4'
  }
}

function five(){
  if(operator == ''){
    num1= num1 + '5'
  }
  else{
  num2= num2 + '5'
  }
}

function six(){
  if(operator == ''){
    num1= num1 + '6'
  }
  else{
  num2= num2 + '6'
  }
}

function seven(){
  if(operator == ''){
    num1= num1 + '7'
  }
  else{
  num2= num2 + '7'
  }
}

function eight(){
  if(operator == ''){
    num1= num1 + '8'
  }
  else{
  num2= num2 + '8'
  }
}

function nine(){
  if(operator == ''){
    num1= num1 + '9'
  }
  else{
  num2= num2 + '9'
  }
}

function plus(){
  operator= '+'
}

function minus(){
  operator= '-'
}

function multiply(){
  operator= '*'
}

function divide(){
  operator= '/'
}

function equals(){
  num1=(+num1)
  num2=(+num2)
  if( operator==='+'){
    total=num1+num2
  }
  else if( operator==='-'){
    total=num1-num2
  }
  else if( operator==='*'){
    total=num1*num2
  }
  else if( operator==='/'){
    total=num1/num2
  }
  else {
    total="YOU GOT GOT"
  }  
  document.querySelector('#placeToPutResult').innerText = total
}



function displayCalc() {
  display = num1 +  operator + num2

  document.querySelector('#placeToPutEquation').innerText = display
}

function clear(){
  total= 0
  num1= ''
  num2= ''
  operator=''
  display=0
  
  document.querySelector('#placeToPutEquation').innerText = '0';
  document.querySelector('#placeToPutResult').innerText = '0';
  }

