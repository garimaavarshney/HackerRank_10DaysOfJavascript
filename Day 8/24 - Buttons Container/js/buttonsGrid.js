let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");
let button5 = document.getElementById("btn5");
let button6 = document.getElementById("btn6");
let button7 = document.getElementById("btn7");
let button8 = document.getElementById("btn8");
let button9 = document.getElementById("btn9");

function clockwiseRotation() {
  [button1.innerHTML,
  button2.innerHTML,
  button3.innerHTML,
  button4.innerHTML,
  button6.innerHTML,
  button7.innerHTML,
  button8.innerHTML,
  button9.innerHTML
  ] = [button4.innerHTML,
  button1.innerHTML,
  button2.innerHTML,
  button7.innerHTML,
  button3.innerHTML,
  button8.innerHTML,
  button9.innerHTML,
  button6.innerHTML
    ]
}

button5.addEventListener("click", clockwiseRotation)