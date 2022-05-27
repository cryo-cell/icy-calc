let display = document.getElementById('display');
let current = document.getElementById('current-operand');

const previous = document.getElementById('previous-operand');

const arr = Array.from(previous);


let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                previous.innerText = '';

                current.innerText = '';
            break;
            case 'CE':

                current.innerText = current.innerText.slice(0, -1);
            break;
            case '←':
                if(current.innerText){
                current.innerText = current.innerText.slice(0, -1);
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





window.addEventListener("keydown", (event) => {
    
    let displayRegex = /^\d+|[*|+|-|/|.]/g;
    let result = event.key.match(displayRegex);

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

  
  
