/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');

const calculator = document.querySelector('#calculator');

const display =  document.querySelector('.display');
  
/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let operator ='';
let firstOperand='';



/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {


    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
  
    // Example
    if (event.target.classList.contains('number')) {

        // Do something with a number

        const ValueClicked= (event.target.innerText);
        currentInput += ValueClicked;
        display.innerText=currentInput;
  
    console.log(currentInput);
      

    } else  if
       (event.target.innerText === '*') {
        
          operator = '*';
          currentInput = '*';

        } else if
        (event.target.innerText ==='+'){

          operator = '+';
          currentInput='+';

        } else if
        (event.target.innerText ==='-'){

          operator = '-';
          currentInput='-';

        } else if
        (event.target.innerText ==='/'){

          operator = '/';
          currentInput='/';

        } else if 
        (event.target.innerTexxt ==='='){
          
            operator = '=';
            currentInput='=';
        } 
      
        
      // Do something with this operator
    
      }  
);

/*-------------------------------- Functions --------------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      



      // This log is for testing purposes to verify we're getting the correct value




      // Future logic to capture the button's value would go here...
    });
  })

  

