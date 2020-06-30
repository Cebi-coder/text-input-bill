const billTypeTextElem = document.querySelector(".billTypeText");
const addToBillBtnElem = document.querySelector(".addToBillBtn");
const callTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalElem = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

function textBillTotal() {

    var billTypeEntered = billTypeTextElem.value.trim();

    if (billTypeEntered === "call") {
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms") {
        smsTotal += 0.75;
    }

    callTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);

    totalCost = callsTotal + smsTotal;
    totalElem.innerHTML = totalCost.toFixed(2);

    styleColor();

}

function styleColor() {

    totalElem.classList.remove("danger");
    totalElem.classList.remove("warning")
    if (totalCost >= 50) {

        totalElem.classList.add("danger");
    }
    else if (totalCost >= 30) {
        totalElem.classList.add("warning");
    }

}

addToBillBtnElem.addEventListener("click", textBillTotal);






