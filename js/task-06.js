let input;
let total = 0;

while (input !== null) {
    input = prompt("Введите число, пожалуйста");
    total += Number(input);
    
}alert(`Общая сумма чисел равна ${total}`);

//------2 способ-------

let input;
let total = 0;
while (input !== null) {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Введено не число попробуйте еще раз ");
  } else {
    total = total + Number(input);
  }
}

alert(`общая сума чисел равна ${total}`);