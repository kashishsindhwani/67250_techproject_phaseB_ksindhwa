 //Part 2
 var x = 5;
 var y =  7; 
 var z = x+y;
 console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    console.log(x1 + x2);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
  console.log(C);
} else if (C.length < z) {
  console.log(z);
} else {
  console.log("good job!");}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Banana") {
      alert("Banana found!");}}}

function findTheBananaForEach(arr) {
  arr.forEach(function(item) {
    if (item === "Banana") {
      alert("Banana found!");
    }
  });
}

//findTheBanana(L1);
//findTheBanana(L2);

//Part 3
var now = new Date();
var hour = now.getHours();

function greeting(h) {
  var greetingElement = document.getElementById("greeting");
  if (!greetingElement) {
    return;
  }

   if (h < 5 || h >= 20) {
    greetingElement.innerHTML = "Good night, Welcome to the MonoMuse Museum";
  } else if (h < 12) {
    greetingElement.innerHTML = "Good morning, Welcome to the MonoMuse Museum";
  } else if (h < 18) {
    greetingElement.innerHTML = "Good afternoon, Welcome to the MonoMuse Museum";
  } else {
    greetingElement.innerHTML = "Good evening, Welcome to the MonoMuse Museum";
  }}

greeting(hour);

function addYear() {
  var year = new Date().getFullYear();
  var copyYearElement = document.getElementById("copyYear");

  if (copyYearElement) {
    copyYearElement.innerHTML = "© " + year + " MonoMuse. All rights reserved.";
  }
}
