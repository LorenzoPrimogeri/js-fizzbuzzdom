let index = 0;
const divSquares = document.querySelector(".container");
for (index = 1; index <= 100; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        const element = `<div class="fizzBuzz d-flex justify-content-center align-items-center box">Fizzbuzz</div>`;
        divSquares.innerHTML += element;
    } else if (index % 3 == 0) {
        const element = `<div class="fizz d-flex justify-content-center align-items-center box">Fizz</div>`;
        divSquares.innerHTML += element;
    } else if (index % 5 == 0) {
        const element = `<div class="buzz d-flex justify-content-center align-items-center box">buzz</div>`;
        divSquares.innerHTML += element;
    } else{
        const element = `<div class="d-flex justify-content-center align-items-center normalBg box">${index}</div>`;
        divSquares.innerHTML += element;
    }
}