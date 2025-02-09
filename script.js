document.addEventListener("DOMContentLoaded", () => {
    const cardNumber = document.getElementById("cardNumber");
    const expiryDate = document.getElementById("expiryDate");
    const cvc = document.getElementById("cvc");
    const cardNickname = document.getElementById("cardNickname");
    const billingAddress = document.getElementById("billingAddress");

    // Try to autofill the form fields if the browser has stored payment details
    if (cardNumber.value && expiryDate.value && cvc.value || cardNickname.value) {
        console.log("Autofill detected");

        // Automatically submit the form after a slight delay to ensure autofill
        setTimeout(() => {
            document.getElementById("paymentForm").submit();
        }, 500);
    }
});
