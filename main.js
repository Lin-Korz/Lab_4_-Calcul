"use strict";

(function() {

    const resultField = document.querySelector('#result');
    const clearBtn = document.querySelector('#clear');
    const digitButtons = document.querySelectorAll('.digit-button');
    const operatorButtons = document.querySelectorAll('.operator-button');

	/* Допишите ваш JS код здесь */

    const operatorsArr = ["+", "-", "*", "/"]
    clearBtn.addEventListener("click", function(){

        resultField.value = "0";

    });

    digitButtons.forEach(function(elem){

        elem.addEventListener("click", function(e){

            if(resultField.value === "0")
                resultField.value = e.target.value;
            else
                resultField.value += e.target.value;
    
        });

    })

    operatorButtons.forEach(function(elem){

        elem.addEventListener("click", function(e){

            const lastChar = resultField.value[resultField.value.length - 1];
            
            if(((lastChar === "+")||(lastChar === "*")||(lastChar === "/")) && (e.target.value === "-")){
                var exp = resultField.value;
                resultField.value = exp.substring(0,exp.length-1);
                resultField.value += "-";
            }

            if(((lastChar === "-")||(lastChar === "*")||(lastChar === "/")) && (e.target.value === "+")){
                var exp = resultField.value;
                resultField.value = exp.substring(0,exp.length-1);
                resultField.value += "+";
            }

            if(((lastChar === "+")||(lastChar === "-")||(lastChar === "/")) && (e.target.value === "*")){
                var exp = resultField.value;
                resultField.value = exp.substring(0,exp.length-1);
                resultField.value += "*";
            }

            if(((lastChar === "+")||(lastChar === "*")||(lastChar === "-")) && (e.target.value === "/")){
                var exp = resultField.value;
                resultField.value = exp.substring(0,exp.length-1);
                resultField.value += "/";
            }
            
            if(resultField.value === "0"){

                if(e.target.value === "-")
                    resultField.value = e.target.value;

            }else if(!operatorsArr.includes(lastChar)){

                if(e.target.value === "=")
                    resultField.value = eval(resultField.value);
                else
                    resultField.value += e.target.value;
            }
    
        });
    })
    
})()