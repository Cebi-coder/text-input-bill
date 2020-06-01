const billTypeTextElem = document.querySelector(".billTypeText");
const addToBillBtnElem = document.querySelector(".addToBillBtn");
const callTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem= document.querySelector(".smsTotalOne");
const totalElem = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElem.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
  // make sure you reference the correct elements (calls,sms and total)
    callTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
  // Have this totalCost as a global variable
     totalCost = callsTotal + smsTotal;
    totalElem.innerHTML = totalCost.toFixed(2);
  
  //styleColor(totalCost);
    
}

// call this function inside "textBillTotal" function ezantsi as last line. 
//function styleColor(totalOne){
  
   //var totalCostElem = Number(totalCost)
  
  totalElem.classList.remove("danger");
  totalElem.classList.remove("warning")
if (totalCost >= 50){
        // adding the danger class will make the text red
        totalElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalElem.classList.add("warning");
    }
//}

addToBillBtnElem.addEventListener("click",textBillTotal);






