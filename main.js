let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = '';
            break;
            case '←':
                if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);
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
    if (event.key === "c") {
        display.innerText = '';}
    else if (event.key === "Enter") {
        display.innerText = eval(display.innerText);}
    else if (event.key === "Backspace") {
        display.innerText = display.innerText.slice(0, -1);} 
    else if(result) {
        display.innerText += `${event.key}`;
        display.appendChild(display.innerText);} return false;
  }, true);
  
