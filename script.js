const home = document.getElementById("home-card");
const table = document.getElementById("table");

function calulateMonthlyPayment() {
  var loanAmount = parseFloat(document.getElementById("loanAmount").value);
  var interestRate =
    parseFloat(document.getElementById("interestRate").value) / 100;
  var loanTerm = parseFloat(document.getElementById("loanTerm").value);

  // Calculate monthly payment
  var monthlyPayment =
    (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /
    (Math.pow(1 + interestRate, loanTerm) - 1);

  // Display monthly payment
  document.getElementById("monthlyPayment").value = monthlyPayment.toFixed(2);
}

function showLoanDetails() {
  home.classList.add("d-none");
  table.classList.remove("d-none");

  // Get form values
  var loanAmount = parseFloat(document.getElementById("loanAmount").value);
  var interestRate =
    parseFloat(document.getElementById("interestRate").value) / 100;
  var loanTerm = parseFloat(document.getElementById("loanTerm").value);
  var monthlyPayment =
    (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /
    (Math.pow(1 + interestRate, loanTerm) - 1);
  // alert box
  document.getElementById("textLoanAmount").textContent =
    document.getElementById("installment_payment").value;
  document.getElementById("textLoanTerm").textContent = loanTerm;

  var paymentDetails = document.getElementById("paymentDetails");
  paymentDetails.innerHTML = "";

  var remainingBalance = loanAmount;
  var totalRateAmount = 0;
  var totalPayAmount = 0;
  for (var i = 1; i <= loanTerm; i++) {
    var interest = remainingBalance * interestRate;
    var principal = monthlyPayment - interest;
    totalRateAmount += parseFloat(interest.toFixed(2));
    paymentDetails.innerHTML +=
      "<tr>" +
      "<td>" +
      i +
      "</td>" +
      "<td>" +
      monthlyPayment.toFixed(2) +
      "</td>" +
      "<td>" +
      principal.toFixed(2) +
      "</td>" +
      "<td>" +
      interest.toFixed(2) +
      "</td>" +
      "<td>" +
      (remainingBalance.toFixed(2) - principal.toFixed(2)).toFixed(2) +
      "</td>" +
      "</tr>";

    remainingBalance -= principal;
  }
  document.getElementById("textRateAmount").textContent = totalRateAmount;
  document.getElementById("textTotalPayAmount").textContent =
    totalRateAmount + loanAmount;

  // Display loan details
  // Show the loan details section
}
function handleBack() {
  home.classList.remove("d-none");
  table.classList.add("d-none");
}

function switchLang(lang) {
  if (lang === "kh") {
    document.querySelector(".lang1").textContent = "គណនាប្រាក់កម្ចី";
    document.querySelector(".lang2").textContent = "ទឹកប្រាក់សរុប";
    document.querySelector(".lang3").textContent = "ប្រាក់កក់ដំបូង";
    document.querySelector(".lang4").textContent = "ទឹកប្រាក់បង់រំលស់";
    document.querySelector(".lang5").textContent = "រយះពេលរំលស់(ខែ)";
    document.querySelector(".lang6").textContent = "ការប្រាក់ក្នុង ០១ខែ(%)";
    document.querySelector(".lang7").textContent = "គណនាប្រាក់បង់ប្រចាំខែ";
    document.querySelector(".lang8").textContent = "បង្ហាញតារាងលម្អិត";
    document.querySelector(".lang9").textContent = "ដាក់ផ្ដល់ដំណឹង";
    document.querySelector(".lang10").textContent = "ត្រឡប់ក្រោយ";
    document.querySelector(".lang11").textContent = "តារាងលម្អិត";
    document.querySelector(".lang12").textContent = "ទឹកប្រាក់រំលស់";
    document.querySelector(".lang13").textContent = "ការប្រាក់សរុប";
    document.querySelector(".lang14").textContent = "ប្រាក់បង់សរុប";
    document.querySelector(".lang15").textContent = "ចំនួនខែបង់រំលស់";
    document.querySelector(".lang16").textContent = "ល.រ";
    document.querySelector(".lang17").textContent = "ទឺកប្រាក់បង់";
    document.querySelector(".lang18").textContent = "ប្រាក់ដើម";
    document.querySelector(".lang19").textContent = "ការប្រាក់";
    document.querySelector(".lang20").textContent = "សមតុល្យ";
  }
  if (lang === "en") {
    document.querySelector(".lang1").textContent = "Loan calculation";
    document.querySelector(".lang2").textContent = "Total amount";
    document.querySelector(".lang3").textContent = "Initial deposit";
    document.querySelector(".lang4").textContent = "Installment amount";
    document.querySelector(".lang5").textContent =
      "Depreciation period (months)";
    document.querySelector(".lang6").textContent = "Interest per month (%)";
    document.querySelector(".lang7").textContent = "Calculate monthly payment";
    document.querySelector(".lang8").textContent = "Show detailed table";
    document.querySelector(".lang9").textContent = "Submit notification";
    document.querySelector(".lang10").textContent = "Back";
    document.querySelector(".lang11").textContent = "Detailed table";
    document.querySelector(".lang12").textContent = "Depreciation";
    document.querySelector(".lang13").textContent = "Total interest";
    document.querySelector(".lang14").textContent = "Total payment";
    document.querySelector(".lang15").textContent =
      "Number of months Installment";
    document.querySelector(".lang16").textContent = "N.0";
    document.querySelector(".lang17").textContent = "Payment";
    document.querySelector(".lang18").textContent = "Principal";
    document.querySelector(".lang19").textContent = "Interest";
    document.querySelector(".lang20").textContent = "Remaining Balance";
  }
}
