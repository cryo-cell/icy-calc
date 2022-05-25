let display = document.getElementById('display');
let current = document.getElementById('current-operand');

let previous = document.getElementById('previous-operand');


let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                previous.innerText = '';
                current.innerText = '';
            break;
            case '←':
                if(current.innerText){
                current.innerText = current.innerText.slice(0, -1);
                }
            break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error!";
                }
                break;
             case '+/-':
                 display.innerText = '/';
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });


      

});




window.addEventListener("keydown", function(event) {
    let displayRegex = /^\d+|[*|+|-|/|.]/g;
    let result = event.key.match(displayRegex);
   
    if ((event.key === "+" || event.key === "*" || event.key === "/" || event.key === "-") && previous.innerText === '') {
        previous.innerText = current.innerText + event.key;
        current.innerText = '';
    }
    else if (event.key === "Enter") {
        current.innerText = eval(display.innerText);
        previous.innerText = '';
    }
    else if (event.key === "Backspace") {
        current.innerText = current.innerText.slice(0, -1);} 
        else if (event.key === "c") {
            previous.innerText ='';
            current.innerText = '';
        }   
        else if(result) {
        current.innerText += `${event.key}`;
        display.appendChild(display.innerText);} return event.key;
  }, true);
  
