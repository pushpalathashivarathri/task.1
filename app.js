const mainmenu = document.querySelector('.mainmenu');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show() {
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
}
function close () {
    mainmenu.style.top = '-100%';

}

// const form = document.getElementById('form');
// const firstname = document.getElementById('firstname');
// const email = document.getElementById('email');
// const password = document.getElementById('password'); 

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });
// const setError = (element, message) => {
// const inputControl = element.parentElement;
// const errorDisplay = inputControl.querySelector('.error');

//    errorDisplay.innerText = message;
//    inputControl.ClassList.add('error');
//    inputControl.ClassList.remove('success');
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//    errorDisplay.innerText = '';
//    inputControl.ClassList.add('success');
//    inputControl.ClassList.remove('error');
// };
// const isValidateEmail = email => {
// const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,1}))$/;
// return re.test(String(email).toLowerCase());
// }


// const validateInputs = () => {
//     const firstnameValue = firstname.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();

// if(firstnameValue === ' ' ){
//     setError(firstname, 'Firstname is required');
// }else{
//      setSuccess(firstname);
// }
// if(emailValue === '' ){
//     setError(email, 'Email is required');
// }else if (!isValidEmail(emailValue)){
//     setError(email, 'provide a valid email address');
// }else {
//     setSuccess(email);
// }
// if(passwordValue  === ''){
//     setError(password, 'password is required');
    
// }else if (passwordValue.length < 8 ) {
//     setError(password, 'password must at least 8 characters.')

// }else {
//     setSuccess(password);
// }
// };



