const billTypeTextElem = document.querySelector(".billTypeText");
const addToBillBtnElem = document.querySelector(".addToBillBtn");
const callTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalElem = document.querySelector(".totalOne");


const textBill = calculateTextBill();



function buttonClicked() {


    var billTypeEntered = billTypeTextElem.value.trim();

   
    textBill.textBillTotal(billTypeEntered)

    callTotalElem.innerHTML = textBill.getCallTotal();

    smsTotalElem.innerHTML = textBill.getSmsTotal();
   // totalCost = callsTotal + smsTotal;
//      if(textBill.getTotal >= 30){
// textBill.styleColor()
//      }
// if(textBill.getTotal() >= 20){
//     textBill.styleColor()

totalElem.classList.add(textBill.styleColor());

     

    totalElem.innerHTML = textBill.getTotal();

   // currentStyleColor;

}

//function styleColor() {

// totalElem.classList.remove("danger");
//totalElem.classList.remove("warning")
//if (totalCost >= 50) {

//totalElem.classList.add("danger");
//}
//else if (totalCost >= 30) {
//totalElem.classList.add("warning");
// }

//}

addToBillBtnElem.addEventListener("click", buttonClicked);






