function calculateTextBill() {


    //var callCost = 0 
    //var smsCost = 0
    var callsTotal = 0
    var smsTotal = 0
    var totalCost = 0


    function textBillTotal(billTypeEntered) {

        var billType = billTypeEntered.trim();

        if (billTypeEntered === "call") {
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms") {
            smsTotal += 0.75;
        }
    }

    function getCallTotal() {
        return callsTotal;

    }
    function getSmsTotal() {
        return smsTotal;
    }
    function getTotal() {
        totalCost = smsTotal + callsTotal;
        return totalCost;
    }
    return {
        textBillTotal,
        getCallTotal,
        getSmsTotal,
        getTotal,
    }
}
