let donation = {
    payment: function(number) {
        const creditCardIsValid = payment.checkCreditCard(number)
        const enoughProvision = user.checkProvision(amount)
        if (creditCardIsValid) {
            // check la valeur dans listPayments
    
        if(enoughProvision) {

            payment.addPayment(number)
        }
        
        } else {
            throw new Error ('Credit card is invalid')
        }
    },
    listPayments : function(divContainer) {
        const payments = payment.payments

        payments.forEach(function (payment) {
            divContainer.innerHTML += 'Payment : ' + payment.amount + 'with credit card ' + payment.card
        })
    }
}

let payment = {
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

let user = {

}

document.querySelector('.btn-event').addEventListener('click',function (e) {
    
    // donation.payment(document.querySelector('.value-card').value)
    
    donation.payment('4532167564751333', 100)

    donation.listPayments()
})


