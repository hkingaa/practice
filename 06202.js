let readline = require('readline-sync');
let a = Number(readline.keyIn('Írd be az első számot: '));
let b = Number(readline.keyIn('Írd be a második számot: '));
let m = readline.keyIn('Írd be a műveleted(+,-,/,x): ');

const ossz = (a, b) => {
  return a + b;
};

const kiv = (a, b) => {
  return a - b;
};

const oszt = (a, b) => {
  return a / b;
};

const szor = (a, b) => {
  return a * b;
};

const math = (m, a, b) => {
  return m(a, b);
};

if (typeof a === 'string') {
  console.log('Ez nem egy szám');
} if (a === 'q') {
  console.log('Kiléptél');
}

if (typeof b === 'string') {
  console.log('Ez nem egy szám');
}
if (a === 'q') {
  console.log('Kiléptél');
}

switch (m) {
  case 'q' :
    console.log('Kiléptél');
    break;
  case '+' :
    console.log('Az eredmény: ' + math(ossz, a, b));
    break;
  case '-' :
    console.log('Az eredmény: ' + math(kiv, a, b));
    break;
  case '/' :
    console.log('Az eredmény: ' + math(oszt, a, b));
    break;
  case 'x' :
    console.log('Az eredmény: ' + math(szor, a, b));
    break;
  default :
    console.log('Próbáld meg mégegyszer beírni!');
}
