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
  const links = document.querySelectorAll(".nav_bar a");

  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

ActiveNav();
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
var selectedDonationAmount = 0;

function showDonationForm(amount) {
  var formSection = document.getElementById("donationFormSection");
  var confirmationSection = document.getElementById("donationConfirmation");
  var customWrap = document.getElementById("customAmountWrap");
  var customInput = document.getElementById("customAmount");
  var totalElement = document.getElementById("donationTotal");

  if (!formSection || !totalElement) {
    return;
  }

  formSection.style.display = "block";

  if (confirmationSection) {
    confirmationSection.style.display = "none";
  }

  if (amount === "custom") {
    selectedDonationAmount = 0;
    customWrap.style.display = "block";
    customInput.value = "";
    totalElement.innerHTML = "$0";
  } else {
    selectedDonationAmount = amount;
    customWrap.style.display = "none";
    customInput.value = "";
    totalElement.innerHTML = "$" + amount;
  }
}

function updateDonationTotal() {
  var customInput = document.getElementById("customAmount");
  var totalElement = document.getElementById("donationTotal");

  if (!customInput || !totalElement) {
    return;
  }

  var customValue = parseFloat(customInput.value);

  if (isNaN(customValue) || customValue < 1) {
    totalElement.innerHTML = "$0";
  } else {
    totalElement.innerHTML = "$" + customValue;
  }
}

function submitDonationForm() {
  var supporterType = document.getElementById("supporterType").value;
  var donorName = document.getElementById("donorName").value;
  var donorEmail = document.getElementById("donorEmail").value;
  var donorPhone = document.getElementById("donorPhone").value;
  var billingAddress = document.getElementById("billingAddress").value;
  var billingCity = document.getElementById("billingCity").value;
  var billingState = document.getElementById("billingState").value;
  var billingZip = document.getElementById("billingZip").value;
  var customWrap = document.getElementById("customAmountWrap");
  var customAmount = document.getElementById("customAmount").value;
  var totalAmount = document.getElementById("donationTotal").innerHTML;
  var confirmationSection = document.getElementById("donationConfirmation");
  var confirmationText = document.getElementById("donationConfirmationText");

  if (
    supporterType === "" ||
    donorName === "" ||
    donorEmail === "" ||
    donorPhone === "" ||
    billingAddress === "" ||
    billingCity === "" ||
    billingState === "" ||
    billingZip === ""
  ) {
    alert("Please complete all required fields.");
    return false;
  }

  if (customWrap.style.display === "block" && (customAmount === "" || parseFloat(customAmount) < 1)) {
    alert("Please enter a valid custom donation amount.");
    return false;
  }

  confirmationSection.style.display = "block";
  confirmationText.innerHTML =
    "Thank you, " + donorName + ". Your " + supporterType.toLowerCase() +
    " contribution has been received. The total amount due is " + totalAmount + ".";

  return false;
}
var selectedAmount = 0;

function showDonationForm(amount) {
  document.getElementById("donationFormSection").style.display = "block";

  if (amount === 'custom') {
    document.getElementById("customAmountWrap").style.display = "block";
    selectedAmount = 0;
  } else {
    selectedAmount = amount;
    document.getElementById("customAmountWrap").style.display = "none";
    updateDonationTotal();
  }

  document.getElementById("donationFormSection").scrollIntoView({ behavior: "smooth" });
}

function updateDonationTotal() {
  let custom = document.getElementById("customAmount").value;
  let total = selectedAmount || custom || 0;
  document.getElementById("donationTotal").innerText = "$" + total;
}

function submitDonationForm() {
  document.getElementById("donationConfirmation").style.display = "block";
  document.getElementById("donationConfirmationText").innerText =
    "Your contribution of " + document.getElementById("donationTotal").innerText + " has been received.";
  return false;
}
function loadMap() {
  var mapContainer = document.getElementById("map");

  if (!mapContainer || typeof L === "undefined") {
    return;
  }

  if (mapContainer._leaflet_id) {
    return;
  }

  var lat = 40.4440;
  var lng = -79.9427;

  var map = L.map("map").setView([lat, lng], 14);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([lat, lng]).addTo(map)
    .bindPopup("MonoMuse Museum")
    .openPopup();
}