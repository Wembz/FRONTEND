// script.js
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    var InitialInvestment = parseFloat(document.getElementById('InitialInvestment').value);
    var MonthlyContribution = parseFloat(document.getElementById('MonthlyContribution').value);
    var AnnualInterestRate = parseFloat(document.getElementById('AnnualInterestRate').value) / 100; // Convert percentage to decimal
    var investmentDuration = parseFloat(document.getElementById('investmentDuration').value);
    
    // Check if the input values are valid numbers
    if (isNaN(InitialInvestment) == false && isNaN(MonthlyContribution) == false && isNaN(AnnualInterestRate) == false && isNaN(investmentDuration) == false) {
        // Calculate the future value using compound interest formula
        var n = 12; // Compounded monthly
        var t = investmentDuration; // Time in years
        var futureValue = InitialInvestment * Math.pow(1 + (AnnualInterestRate / n), n * t) + (MonthlyContribution * ((Math.pow(1 + (AnnualInterestRate / n), n * t) - 1) / (AnnualInterestRate / n)));
        
        var x = Math.pow(2,2) //2^2

        // Display the future value on the web page
        document.getElementById('futureValue').textContent = "Your future value after " + investmentDuration + " years is: $" + futureValue.toFixed(2);
    } else {
        // Display an error message for invalid inputs
        document.getElementById('futureValue').textContent = "Please enter valid numbers for all fields.";
    }
    
    // Reset the form
    document.getElementById('calculatorForm').reset();
});

/*

1st January 2024 100$

10% Interest Rate

110$

121$







*/
