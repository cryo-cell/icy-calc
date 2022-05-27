let display = document.getElementById('display');
//This variable represents the element containing the current and previous operand elements
//This var can be calculated as whole to get the answer
let current = document.getElementById('current-operand');
//var for operand prior to calculations
const previous = document.getElementById('previous-operand');
/*after the calculation is selected 
we will assign the current operand to the previous operand & 
clear the current operand to make room for more*/
let buttons = Array.from(document.getElementsByClassName('button'));
//var containing an array containing each element with the class of button

/******THIS IS OUR CODE TO ADD BUTTON FUNCTIONALITY TO OUR CALCULATOR******/
buttons.map( button => {
            /*here we are using .map to apply an eventlistener on each element with the class of button 
            using our variable buttons*/
    button.addEventListener('click', (e) => {
        //our eventListener is waiting for a click on an element with the class of button
        switch(e.target.innerText) {
            case 'C':
                previous.innerText = '';
                current.innerText = '';
            break;
            case 'CE':
                current.innerText = current.innerText.slice(0, -1);
            break;
            case '←':
                if(current.innerText) {
                current.innerText = current.innerText.slice(0, -1);
                //.slice(0, -1) removes the last entry
                //this will also be used for backspace when adding keyboard functionality**
                }
            break;
            case '=':
                try {
                    current.innerText = eval(display.innerText);
                    previous.innerText = '';  
                } catch {
                    display.innerText = "Error!";
                }
                break;
             case '+/-':
                previous.innerText += current.innerText + '/';
                current.innerText = '';
            break;
            case '+':
                    previous.innerText += current.innerText + '+';
                    current.innerText = '';
            break;
            case '-':
                    previous.innerText += current.innerText + '-';
                    current.innerText = '';
            break;
            case '*':
                            previous.innerText += current.innerText + '*';
                            current.innerText = '';
            break;
            default:
                current.innerText += e.target.innerText;
        }
    });
});

/******THIS IS OUR CODE TO ADD KEYBOARD FUNCTIONALITY TO OUR CALCULATOR******/

//here we are adding an eventlistener to the window
window.addEventListener("keydown", (event) => {
//the eventlistenter is waiting for keyboard input after which an event will take place
    let displayRegex = /^\d+|[*|+|-|/|.]/g;
    let result = event.key.match(displayRegex);
//here we are using a switch statement to update our display depending on the key value of the event 
    switch(event.key){
        case "+":
            if (result){
            previous.innerText += current.innerText + event.key;
            current.innerText = '';
            }
            break; 
        case "-":
            previous.innerText += current.innerText + event.key;
            current.innerText ='';
            break; 
        case "/":
            previous.innerText += current.innerText + event.key;
            current.innerText ='';
            break; 
        case "*":
            previous.innerText += current.innerText + event.key;
            current.innerText ='';
            break;  
        case "Enter":
            current.innerText = eval(display.innerText);
            previous.innerText = '';
        break;
        case "Backspace":
            if (current.innerText){
            current.innerText = current.innerText.slice(0, -1);
            } previous.innerText = previous.innerText.slice(0, -1);
        break;
        case "c":
            previous.innerText ='';
            current.innerText = '';
        break;
        default:
            if (result) {
                current.innerText += event.key;
            }
        

    }
}, true);

  
  
