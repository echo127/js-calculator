let preVal = null;
let newVal = null;
let operator = null;
let resultVal = null;
let storeVal = null;
let decimalclicked = false;


function numButPress(num){
    if(newVal !== null){
        newVal = newVal.concat(num.toString());
    }else{
        newVal = num.toString();
    }
    document.getElementById("entry").value = newVal;
}


function decimalChecker(){
    if(decimalclicked == false){
        if(newVal !== null){    
            newVal = newVal.concat('.');
        }else{
            newVal = '0.';
        }
        decimalclicked = true;
        document.getElementById("entry").value = newVal;
    }else{
        errorMessage();
    }
    
}

function errorMessage(){
    document.getElementById("entry").value = "ERROR";
    resetValue();
}

function mathButPress(opr){
    decimalclicked = false;
    operator = opr;
    preVal = newVal;
    newVal = null;
}

function clearButPress(){
    resetValue();
    document.getElementById("entry").value = "0";
}

function resetValue(){
    preVal = null;
    newVal = null;
    operator = null;
    resultVal = null;
    storeVal = null;
    decimalclicked = false;
}

function storeNum(){
}

function printNum(){
    
}

function equalButPress(){
    if(preVal !== null && newVal !== null && operator !== null){
        preVal = parseFloat(preVal);
        newVal = parseFloat(newVal);
        switch(operator){
            case '+':
                resultVal = preVal + newVal;
                break;
            case '-':
                resultVal = preVal - newVal;
                break;
            case '*':
                resultVal = preVal * newVal;
                break;
            case '/':
                resultVal = preVal / newVal;
                break;   
        }
    }else{
        resultVal = "ERROR";
    }
    document.getElementById("entry").value = resultVal.toString();
    resetValue();
}