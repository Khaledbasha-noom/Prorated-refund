function calculateRefund() {
    let C = parseFloat(document.getElementById("planCharge").value);
    let M = parseFloat(document.getElementById("planMonths").value);
    let D = parseFloat(document.getElementById("daysPassed").value);

    if (isNaN(C) || isNaN(M) || isNaN(D) || C <= 0 || M <= 0 || D < 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    let refundAmount = C - (D * (C / (M * 30)));
    refundAmount = Math.max(0, refundAmount.toFixed(2)); // Ensures refund doesn't go negative

    document.getElementById("refundAmount").innerText = refundAmount + " USD";
}
