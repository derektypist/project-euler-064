// Function to Display Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.length == 0 || num < 13 || num > 10000 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 13 and 10000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Exactly ${oddPeriodSqrts(num)} continued fractions, for N ≤ ${num}, have an odd period.`
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the count of numbers ≤ n, with odd periods.
    oddPeriodSqrts(500)   returns 83
    oddPeriodSqrts(1000)  returns 152
    oddPeriodSqrts(5000)  returns 690
    oddPeriodSqrts(10000) returns 1322
*/
function oddPeriodSqrts(n) {
    function getPeriod(num) {
        let period = 0;
        let m = 0;
        let d = 1;
        let a = Math.floor(Math.sqrt(num));
        const a0 = a;
        while (2 * a0 !== a) {
            m = d * a - m;
            d = Math.floor((num - m ** 2) / d);
            a = Math.floor((Math.sqrt(num) + m) / d);
            period++;
        }
        return period;
    }

    function isPerfectSquare(num) {
        return Number.isInteger(Math.sqrt(num));
    }

    let counter = 0;
    for (let i = 2; i <= n; i++) {
        if (!isPerfectSquare(i)) {
            if (getPeriod(i) % 2 !== 0) counter++;
        }
    }

    return counter;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}