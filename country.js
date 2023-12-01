const form = document.getElementById("form");
const names = document.getElementById("name");
const number = document.getElementById("number");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validatInputs();
});

function validatInputs() {
    const nameVal = names.value.trim();
    const numberVal = number.value.trim();



    if (nameVal==='') {
        setError(names,"please enter your name");
    }
    else {
        setSuccess(names);
    }

    if (numberVal==='') {
        setError(number,"enter mobile number");
    }
    else {
        setSuccess(number);
    }
    console.log('Running if');
}

function setError(input,message) {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'error input';
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'success input';
}
console.log('Running');




















