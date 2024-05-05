//get the console id
const display = document.getElementById("console")

//function append the numbers to display in the console 
// function appendToDisplay(input){
//     display.value += input; 
// }

const appendToDisplay = (input) => display.value += input; //my attempt at arrow function

// arrow function to clear the console
// set it equal to an empty string to clear conosle
const clearDisplay = () => display.value = "";
//funciton to calculate
function calculate(){
    //try statemente to execute code and look for errors
    try {
        display.value = eval(display.value)// eval function takes an expression and evalutes and gives a result 
                                           // like a calculator     
    }
    //catch(error) if there's an error we will catch it here and display an error
    catch(error) {
        display.value = "Error"
    }

}
 