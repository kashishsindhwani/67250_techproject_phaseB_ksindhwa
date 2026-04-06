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

function ActiveNav() {
  var navLinks = document.querySelectorAll(".nav_bar a");
  var currentPath = window.location.pathname;

  navLinks.forEach(function(link) {
    var linkPath = new URL(link.href, window.location.href).pathname;

    if (
      currentPath === linkPath ||
      (currentPath.endsWith("/") && linkPath.endsWith("/index.html")) ||
      (currentPath.endsWith("/index.html") && linkPath.endsWith("/"))
    ) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("load", ActiveNav);

ActiveNav();

$("#readLess").click(function () {
  $("#longIntro").hide();
  $("#readLess").hide();
  $("#readMore").show();
});

$("#readMore").click(function () {
  $("#longIntro").show();
  $("#readLess").show();
  $("#readMore").hide();
});
function showPurchaseForm(date) {
  var formSection = document.getElementById("purchaseFormSection");
  var selectedDateInput = document.getElementById("selectedDate");
  var confirmationSection = document.getElementById("confirmationMessage");

  if (formSection) {
    formSection.style.display = "block";
  }

  if (selectedDateInput) {
    selectedDateInput.value = date;
  }

  if (confirmationSection) {
    confirmationSection.style.display = "none";
  }

  calculateTotal();
}

function calculateTotal() {
  var ticketTypeElement = document.getElementById("ticketType");
  var quantityElement = document.getElementById("ticketQuantity");
  var totalPriceElement = document.getElementById("totalPrice");

  if (!ticketTypeElement || !quantityElement || !totalPriceElement) {
    return;
  }

  var ticketPrice = parseFloat(ticketTypeElement.value);
  var quantity = parseInt(quantityElement.value);
  var total = 0;

  if (!isNaN(ticketPrice) && !isNaN(quantity)) {
    total = ticketPrice * quantity;
  }

  totalPriceElement.innerHTML = "$" + total;
}

function submitTicketForm() {
  var name = document.getElementById("buyerName");
  var email = document.getElementById("buyerEmail");
  var ticketType = document.getElementById("ticketType");
  var quantity = document.getElementById("ticketQuantity");
  var date = document.getElementById("selectedDate");
  var totalPrice = document.getElementById("totalPrice");
  var confirmationSection = document.getElementById("confirmationMessage");
  var confirmationText = document.getElementById("confirmationText");

  if (!name.value || !email.value || !ticketType.value || !quantity.value || !date.value) {
    alert("Please complete all required fields.");
    return false;
  }

  alert("Redirecting to payment system.");

  if (confirmationSection && confirmationText) {
    confirmationSection.style.display = "block";
    confirmationText.innerHTML =
      "Thank you, " + name.value + "! Your order for " + quantity.value +
      " ticket(s) on " + date.value + " has been received. Your total is " +
      totalPrice.innerHTML + ".";
  }

  return false;
}