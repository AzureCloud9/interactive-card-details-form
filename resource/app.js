let changeBackNumber = document.getElementById('bNumber');
let changeCredNumber = document.getElementById('cNumber');
let changeCredName = document.getElementById('cName')

const cvc = document.getElementById('cfCVC');
const credNumber = document.getElementById('cfNumber');
const credName = document.getElementById('cfName');


const button = document.getElementById('btn');


button.addEventListener('click', e => {
    changeBackNumber.innerHTML = cvc.value;
    changeCredNumber.innerHTML = credNumber.value;
    changeCredName.innerHTML = credName.value;
})