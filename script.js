document.addEventListener("DOMContentLoaded", () => {
    const cardNumber = document.getElementById("cardNumber");
    const expiryDate = document.getElementById("expiryDate");
    const cvc = document.getElementById("cvc");
    const cardNickname = document.getElementById("cardNickname");
    const billingAddress = document.getElementById("billingAddress");

    const checkAutofill = () => {
        console.log("Card Number:", cardNumber.value);
        console.log("Expiry Date:", expiryDate.value);
        console.log("CVC:", cvc.value);
        console.log("Card Nickname:", cardNickname.value);
        console.log("Billing Address:", billingAddress.value);

        if (cardNumber.value && expiryDate.value && cvc.value && cardNickname.value && billingAddress.value) {
            console.log("Autofill detected");

            // Automatically submit the form after a slight delay to ensure autofill
            setTimeout(() => {
                document.getElementById("paymentForm").submit();
            }, 1000); // 1 second delay
        } else {
            console.log("Autofill not detected, trying again...");
            setTimeout(checkAutofill, 500); // Check again after 500ms
        }
    };

    checkAutofill();
});
