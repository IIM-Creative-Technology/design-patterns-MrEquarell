let Donation = {
    payment: function(number) {
        var creditCardIsValid = Payment.checkCreditCard(number)
        if (creditCardIsValid) {
            
        }
    },
    listPayments : function() {

    }
}

let Payment = {
    checkCreditCard: function (number) {

        number = String(number);

        let sum = parseInt(number.charAt(number.length - 1));

        for (let i = 0; i < number.length - 1; i++) {
            let value = parseInt(number.charAt(i));

            if (i % 2 === 0) {
                value *= 2;
            }

            if (value > 9) {
                value -= 9;
            }

            sum += value;
        }

        return sum % 10 === 0;
    }
}

document.querySelector('.btn-event').addEventListener('click',function (e) {
    Donation.payment(document.querySelector('.value-card').value)


})


