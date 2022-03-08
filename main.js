let index = 0;
const divSquares = document.querySelector(".row");
for (index = 1; index <= 100; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        const element = `<div class="fizzBuzz square d-flex justify-content-center align-items-center box">Fizzbuzz</div>`;
        divSquares.innerHTML += element;
    } else if (index % 3 == 0) {
        const element = `<div class="fizz square d-flex justify-content-center align-items-center box">Fizz</div>`;
        divSquares.innerHTML += element;
    } else if (index % 5 == 0) {
        const element = `<div class="buzz square d-flex justify-content-center align-items-center box">buzz</div>`;
        divSquares.innerHTML += element;
    } else {
        console.log(index)
        const element = `<div class="square d-flex justify-content-center align-items-center normalBg box">${index}</div>`;
        divSquares.innerHTML += element;
    }
}