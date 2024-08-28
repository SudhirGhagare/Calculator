var output = document.querySelector('.calculator__output');
var second = document.querySelector('.calculator__after');

const symbol = ['+','-','÷','=','×'];
let num = 0
let ans  = 0
let operator = ''
let isAssignment = false

function display(x) {

  if(isAssignment){
    reset()
    isAssignment = false
  }

  second.textContent += x;

  if(symbol.includes(x)){

    num = parseFloat(output.textContent)

    if(x == '=' && isAssignment == false){
      ans = calculate(num,operator);
      output.textContent = ans
      second.textContent += ans 
      isAssignment = true

    }else{

        if(operator.length == 0){
          operator = x;
          ans = parseFloat(num);
        }else{
          ans  = calculate(num,operator)
          operator = x
        }

        
        output.textContent = '0'
    }
    
    
  }else{
    output.textContent = (output.textContent === '0')? x: output.textContent+x;
  }

  
  
}


function  calculate(num, x){

  switch(x){

    case '+':
      return ans + parseFloat(num)

     case '-':
      return  ans - parseFloat(num)

      case '÷':
        return ans / parseFloat(num)

      case '×':
        return ans * parseFloat(num)  
  }

}



function reset(){

  output.textContent = '0';
  second.textContent = '';
  ans = 0;
  operator = ''
  
}

function backSpace(){

  var len = second.textContent.length
  var len2 = output.textContent.length

  second.textContent = (len > 0) ? second.textContent.substring(0,len-1): second.textContent;

  if(len2 == 1){
    output.textContent = '0'
  }else if(!symbol.includes(second.textContent.substring(-1))){
    output.textContent = (output.textContent == '0')  ? output.textContent : output.textContent.substring(0,len2-1);
  }

}