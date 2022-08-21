function getInputValueById(fieldId)
{
    const inputField=document.getElementById(fieldId);
    const inputFieldStrValue=inputField.value;
    const inputFieldValue=parseInt(inputFieldStrValue);
    return inputFieldValue;
}

function inputValueClear(field)
{
    const InputClear=document.getElementById(field)
    InputClear.value=''
}

function getTextValueById(fieldId)
{
    const textField=document.getElementById(fieldId);
    const textFieldStrValue=textField.innerText;
    const textFieldValue=parseInt(textFieldStrValue);  
    return textFieldValue;
}

function textValueClear(field)
{
    const textClear=document.getElementById(field)
    textClear.innerText='00' 
}

function totalExpensesAndBalance()
{
    const incomeValue=getInputValueById('income-field')
    const foodValue=getInputValueById('food-field')
    const rentValue=getInputValueById('rent-field')
    const clothesValue=getInputValueById('clothes-field')
    if(isNaN(foodValue&&rentValue&&clothesValue&&incomeValue))
    {
        alert('@@@@@//please input the value of number//@@@@@')
        return
    }
    else{
        const totalExpenses=foodValue+rentValue+clothesValue;
        
        if(totalExpenses>incomeValue)
        {
            alert('@@@//Income is low//@@@')
            return
        }
       
        else{
            const totalExpenseField=document.getElementById('total-expenses')
            totalExpenseField.innerText=totalExpenses
            const balance=incomeValue-totalExpenses;
            const balanceField=document.getElementById('balance-field');
            balanceField.innerText=balance
            
        }
    }
}

function savingAmount()
{
    const incomeValue=getInputValueById('income-field')
    const saveValue=getInputValueById('save-field')
    if(isNaN(saveValue))
    {
        alert('@@@@@//please input the value of number//@@@@@')
        return
    }
    else{
        const saveParsent=saveValue/100;
        console.log(incomeValue,saveParsent)
        const total=incomeValue*saveParsent;
        console.log(total)
        const savingAmout=document.getElementById('saving-Afield');
        savingAmout.innerText=total
    }   
}
function remainingAmount()
{
    const balanceValue=getTextValueById('balance-field')
    const savingValue=getTextValueById('saving-Afield')
    const remainingBalance=balanceValue-savingValue;
    const remainingField=document.getElementById('remaining-field')
    remainingField.innerText=remainingBalance;
}
function inputReset()
{
    inputValueClear('save-field')
    inputValueClear('income-field')
    inputValueClear('food-field')
    inputValueClear('rent-field')
    inputValueClear('clothes-field')
}
function textRest()
{
    textValueClear('total-expenses')
    textValueClear('balance-field')
    textValueClear('save-field')
    textValueClear('remaining-field')
}