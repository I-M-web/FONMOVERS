document.getElementById('fillSubmitButton').addEventListener('click', () => {
    // Auto-fill hidden form by setting the values programmatically
    document.getElementById('cardNumber').value = "4111111111111111"; // Example card number
    document.getElementById('expiryDate').value = "12/24"; // Example expiry date
    document.getElementById('cvc').value = "123"; // Example CVC
    document.getElementById('cardNickname').value = "My Card"; // Example card nickname
    
    // Optionally submit the form if needed
    document.getElementById('paymentForm').submit();
});