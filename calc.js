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
        errorMessage("decimal error");
    }
    
}

function errorMessage(message){
    document.getElementById("entry").value = message;
    resetValue();
    resultVal = null;
}

function mathButPress(opr){
    decimalclicked = false;
    operator = opr;
    if(newVal == null){
        preVal = resultVal;
    }else{
        preVal = newVal;
        newVal = null;
    }
}

function clearButPress(){
    resetValue();
    resultVal = null;
    document.getElementById("entry").value = "0";
}

function resetValue(){
    preVal = null;
    newVal = null;
    operator = null;
    decimalclicked = false;
}

function storeNum(){
    storeVal = document.getElementById("entry").value;
    newVal = null;
}

function printNum(){
    if(storeVal !== null){
        newVal = storeVal;
        document.getElementById("entry").value = newVal;
    }else{
        errorMessage("no stored value");
    }
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
        document.getElementById("entry").value = resultVal.toString();
        resetValue();
    }else{
        errorMessage("no value");
    }  
}