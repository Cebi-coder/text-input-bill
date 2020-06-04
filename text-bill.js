const billTypeTextElem = document.querySelector(".billTypeText");
const addToBillBtnElem = document.querySelector(".addToBillBtn");
const callTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalElem = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

function textBillTotal() {
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElem.value.trim();
    // update the correct total
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
    styleColor(totalCost);
}


function styleColor(totalOne) {


    //var totalCostElem = Number(totalCost)

    totalElem.classList.remove("danger");
    totalElem.classList.remove("warning")

    if (totalCost >= 30) {
alert("warning")
        totalElem.classList.add("warning");
    }
    else if (totalCost >= 50) {
        alert("danger")
        totalElem.classList.add("danger");
    }
}
function addToBillBtnClicked() {
    billTypeEntered = billTypeTextElem.value;
    const totalCost = totalElem(billType)
    totalElem.innerHTML = totalCost
}

function addToBillBtnClicked() {
    billType = billTypeTextElem.value;
    const total = totalOne(billType)
    totalOne.innerHTML = totalCost
    
}
addToBillBtnElem.addEventListener("click", textBillTotal);
