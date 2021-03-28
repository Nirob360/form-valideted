
const form = document.querySelector('.form');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confromPassword = document.querySelector('#confrom_password');




// function 

function showError(input,message) {
     const formControl = input.parentElement;
     formControl.className = 'from-controle-box error';
     const small = formControl.querySelector('small');
     small.innerText = message;     
}

function showSuccess(input) {
     const formControl = input.parentElement;
     formControl.className = 'from-controle-box success';
         
}

function checkRequired(inputArr) {
     inputArr.forEach(function (input) {
       if (input.value.trim() === '') {
         showError(input, `${input.id} is required.`)
       } else {
         showSuccess(input)
       }
     })
}
   
function validateEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is invalid')
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} must be atleast ${min} characters`)
  } else if (input.value.length >= max) {
    showError(input, `${input.id} must be less than ${max} characters`)
  } else {
    showSuccess(input)
  }
}
function checkPasswordsMatch(input, input2) {
  if (input.value !== input2.value) {
    showError(input2, 'password Do not match!');
  }
}

// event lisiner 

form.addEventListener('submit', (e) => {
     e.preventDefault();
  checkRequired([userName, email, password, confromPassword]);
  validateEmail(email);
  checkLength(userName, 6, 8);
  checkLength(password, 7, 60);
  checkPasswordsMatch(password, confromPassword);
})



