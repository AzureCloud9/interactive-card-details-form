let changeBackNumber = document.getElementById('bNumber');
let changeCredNumber = document.getElementById('cNumber');
let changeCredName = document.getElementById('cName')
let changeSpan1 = document.getElementById('span1');
let changeSpan2 = document.getElementById('span2');


const cvc = document.getElementById('cfCVC');
const credNumber = document.getElementById('cfNumber');
const credName = document.getElementById('cfName');
const spann1 = document.getElementById('cfEXP')
const spann2 = document.getElementById('cfMM')
const formReset1 = document.getElementById('naNum')
const formReset2 = document.getElementById('dates')
const error1 = document.getElementById('errorP1')
const error2 = document.getElementById('errorP2')
const error3 = document.getElementById('errorP3')
const error4 = document.getElementById('errorP4')
const error5 = document.getElementById('errorP5')
const thankYou = document.getElementById('ThankYou')
const button = document.getElementById('btn');




button.addEventListener('click', e => {
    errors()
    fixedErrors()
    noErrorRun()
    button.innerHTML = 'Continue'
    

})


function errors() {
    if( credName.value  === ''){
        error1.style.display = 'block'
    } 
    
    if (credNumber.value === '') {
        error2.style.display = 'block'
    }
    
    if(spann1.value === ''){
        error3.style.display = 'block'
    } 
    
    if(spann2.value === ''){
        error4.style.display = 'block'
    } if(cvc.value === ''){
        error5.style.display = 'block'
    }
        
}

function fixedErrors() {
    if( credName.value  != ''){
        error1.style.display = 'none'
    } 
    
    if (credNumber.value != '') {
        error2.style.display = 'none'
    }
    
    if(spann1.value != ''){
        error3.style.display = 'none'
    } 
    
    if(spann2.value != ''){
        error4.style.display = 'none'
    } if(cvc.value != ''){
        error5.style.display = 'none'
    }
        
}

function noErrorRun() {

    if(credName.value  != '' && credNumber.value != '' && spann1.value != '' && spann2.value != '' & cvc.value != ''){
        changeBackNumber.innerHTML = cvc.value;
        changeCredNumber.innerHTML = credNumber.value;
        changeCredName.innerHTML = credName.value;
        changeSpan1.innerHTML = spann1.value;
        changeSpan2.innerHTML = spann2.value; 
        formReset1.style.display = 'none'
        formReset2.style.display = 'none'
        thankYou.style.display = 'flex'
    }
    
}
