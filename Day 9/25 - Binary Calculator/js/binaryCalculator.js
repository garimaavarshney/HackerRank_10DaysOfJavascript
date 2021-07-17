let screen = "";

function operatorFunx() {
  let numbers, x, y, sum, ans;
  if (screen.indexOf("+") != -1) {
    numbers = screen.split("+");
    x = parseInt(numbers[0], 2);
    y = parseInt(numbers[1], 2);
    sum = x + y;
    ans = sum.toString(2);
  } else if (screen.indexOf("-") != -1) {
    numbers = screen.split("-");
    x = parseInt(numbers[0], 2);
    y = parseInt(numbers[1], 2);
    sub = x - y;
    ans = sub.toString(2);
  } else if (screen.indexOf("*") != -1) {
    numbers = screen.split("*");
    x = parseInt(numbers[0], 2);
    y = parseInt(numbers[1], 2);
    mul = x * y;
    ans = mul.toString(2);
  } else if (screen.indexOf("/") != -1) {
    numbers = screen.split("/");
    x = parseInt(numbers[0], 2);
    y = parseInt(numbers[1], 2);
    div = x / y;
    ans = div.toString(2);
  }
  screen = ans;
  document.getElementById("res").innerHTML = screen;
}

function key(c) {
  screen += c;
  document.getElementById("res").innerHTML = screen;
}

function cl() {
  screen = "";
  document.getElementById("res").innerHTML = screen;
};