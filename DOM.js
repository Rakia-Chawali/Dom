let PlusButton = document.getElementsByClassName("fa-plus-circle");

let MinisButton = document.getElementsByClassName("fa-minus-circle");
let DeleteButton = document.getElementsByClassName("fa-trash-alt");
let HeartButton = document.getElementsByClassName("fa-heart");
//about plus button//
let quantity = document.getElementsByClassName("qte");
// let total = document.querySelector(".total");

for (let i = 0; i < PlusButton.length; i++) {
  // let prices = document.getElementsByClassName("dollar");
  // let quantity = document.getElementsByClassName("qte");

  PlusButton[i].addEventListener("click", function () {
    quantity[i].innerHTML++;
    total();
  });
}

// about minis button//
for (let i = 0; i < MinisButton.length; i++) {
  let quantity = document.getElementsByClassName("qte");

  MinisButton[i].addEventListener("click", function () {
    if (quantity[i].innerHTML > 0) {
      quantity[i].innerHTML--;
    }
    total();
  });
}
//about heart button//
for (let i = 0; i < HeartButton.length; i++) {
  HeartButton[i].addEventListener("click", function () {
    HeartButton[i].classList.toggle("heart");
  });
}
// about delete button//
for (let i = 0; i < DeleteButton.length; i++) {
  DeleteButton[i].addEventListener("click", function () {
    DeleteButton[i].parentElement.parentElement.remove();
  });
}

function total() {
  let prices = document.getElementsByClassName("dollar");
  // let quantity = document.getElementsByClassName("qte");
  let total = document.querySelector(".total");
  let sum = 0;
  for (let i = 0; i < quantity.length; i++) {
    sum =
      sum + parseInt(quantity[i].innerHTML) * parseFloat(prices[i].innerHTML);
  }
  return (total.innerHTML = sum);
}
