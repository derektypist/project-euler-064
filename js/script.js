// Function to Display Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.length == 0 || num<13 || num>10000 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 13 and 10000.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Exactly ${oddPeriodSqrts(num)} continued fractions, for N &le; ${num}, have an odd period.`
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}