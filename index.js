const GBP = 1.14; // setting EUR to GBP exchange rate
const EUR = 0.88; // setting GBP to EUR exchange rate

alert ("Currency converter \n");
alert ("Menu:");
alert ("1. GBP to EUR");
alert ("2. EUR to GBP");
alert ("3. Exit \n");
const menuInput = prompt("Please enter 1,2 or 3 to continue: "); // user can pick the menu number from 1-3

switch (menuInput) {
  case '1':
    var inputGBP = prompt("Please enter amount of GBP: ");
    var GBPtoEUR = inputGBP * GBP;
    alert("\n");
    alert("You will get " + GBPtoEUR.toFixed(2) + " EUR.") // calculation
    break;
  case '2':
    var inputEUR = prompt("Please enter amount of EUR: ");
    var EURtoGBP = inputEUR * EUR;
    alert("\n");
    alert("You will get " + EURtoGBP.toFixed(2) + " GBP.") // calculation
    break;
  case '3':
    alert("Thanks and bye!"); // goodbye message if the user hit 3 in the menu
    break;
  default:
    alert("Please enter numeber from 1 to 3 and hit ENTER!"); // if the number input is other that 1,2 or 3 then display this
    break;
}