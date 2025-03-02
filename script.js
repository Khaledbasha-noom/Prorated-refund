function calculateRefund() {
    let planCharge = parseFloat(document.getElementById("planCharge").value);
    let planMonths = parseFloat(document.getElementById("planMonths").value);
    let passedDays = parseFloat(document.getElementById("passedDays").value);

    if (isNaN(planCharge) || isNaN(planMonths) || isNaN(passedDays) || planMonths <= 0) {
        document.getElementById("refundAmount").innerText = "Please enter valid values.";
        return;
    }

    let totalDays = planMonths * 30;
    let refundAmount = (planCharge / totalDays) * (totalDays - passedDays);
    refundAmount = Math.max(0, refundAmount.toFixed(2));

    document.getElementById("refundAmount").innerText = `Refund Amount: $${refundAmount}`;
}

function generateEmail() {
    let refundText = document.getElementById("refundAmount").innerText;
    let refundAmount = refundText.replace("Refund Amount: $", "");

    if (isNaN(refundAmount) || refundAmount === "") {
        document.getElementById("emailOutput").value = "Please calculate the refund first.";
        return;
    }

    let emailTemplate = `Hi Customer,\n\n` +
        `Thanks for getting back to us! I totally understand that the subscription credit we've offered doesn't fit your needs right now, and we're always happy to help our Noomers in any way we can.\n\n` +
        `I'm happy to let you know that I was able to find an exception to our policy for your specific scenario so I cancelled your Noom subscription and issued a prorated refund of $${refundAmount}. Please allow 2-5 business days to see the refund credited to your original payment method.\n\n` +
        `Let me know if you have any other questions, comments, or concerns. We're always here to support you on your wellness journey with Noom!`;

    document.getElementById("emailOutput").value = emailTemplate;
}
