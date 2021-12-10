const containerBoxes = document.querySelector('.container-boxes');

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        containerBoxes.innerHTML += `<div class="box box-red">FizzBuzz<div>`
    } 
    else if (i % 3 === 0) {
        containerBoxes.innerHTML += `<div class="box box-palegreen">Fizz<div>`
    }
    else if (i % 5 === 0) {
        containerBoxes.innerHTML += `<div class="box box-orange">Buzz<div>`
    }
    else {
        containerBoxes.innerHTML += `<div class="box box-teal">${i}<div>`
    }
}