function calculateTextBill() {


    //var callCost = 0 
    //var smsCost = 0
    var callsTotal = 0
    var smsTotal = 0
   // var totalCost = 0


    function textBillTotal(billTypeEntered) {

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
            return smsTotal + callsTotal;
            
        }
        function styleColor() {

            if (getTotal() >= 30) {
                return "danger"
            } else if (getTotal() >= 20) {
                return "warning"
            }
            
        }
    
        return {
            //calculateTextBill,
            textBillTotal,
            getCallTotal,
            getSmsTotal,
            getTotal,
            styleColor,
        }
    }

