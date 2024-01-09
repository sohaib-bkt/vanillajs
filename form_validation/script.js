var nameError = document.getElementById('error-name');
var phoneError = document.getElementById('error-phone');
var emailError = document.getElementById('error-email');
var messageError = document.getElementById('error-message');
var submitError = document.getElementById('submit-error');

function namevalidation() {
  var name = document.getElementById('name').value;
  if (name.length == 0) {
    nameError.innerHTML = 'Name Is Required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Full-Name Is Required';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check fa-xl" style="color: #1bc02f;"></i>';
  return true;


}
function phoneValidation() {
  var phone = document.getElementById('phone').value;
  console.log(phone);
  if (phone.length == 0) {
    phoneError.innerHTML = 'Phone number is required';
    return false;
  }
  if (phone.length > 10) {
    phoneError.innerHTML = 'Phone Not Correct';
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'Phone Not Correct';
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check fa-xl" style="color: #1bc02f;"></i>';
  return true;
}

function emailValidation() {
  var email = document.getElementById('email').value;
  if (email.length == 0) {
    emailError.innerHTML = 'Email Is Required';
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    emailError.innerHTML = 'Email Is Not Valid';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check fa-xl" style="color: #1bc02f;"></i>';
  return true;
}

function messageValidation() {
  var message = document.getElementById('mes').value;
  var rest = 20 - message.length;
  if (message.length == 0) {
    messageError.innerHTML = 'Message is required';
    return false;
  }
  if (rest > 0) {
    messageError.innerHTML = rest +' required';
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-circle-check fa-xl" style="color: #1bc02f;"></i>';
  return true;
}

function validate(e) {
  var isNameValid = namevalidation();
  var isPhoneValid = phoneValidation();
  var isEmailValid = emailValidation();
  var isMessageValid = messageValidation();
  if (!isNameValid || !isPhoneValid || !isEmailValid || !isMessageValid) {
    e.preventDefault();
    submitError.innerHTML = 'Form Not Valid';
    setTimeout(function () {
      submitError.innerHTML = '';
      
    },3000)
    
    return false;
  }
  submitError.innerHTML = '';
  return true;
}
