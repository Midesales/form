const form = document.querySelector('.formelement');
const frstname = document.querySelector('.firstname');
const lstname = document.querySelector('.lastname');
const usname = document.querySelector('.username');
const pswd = document.querySelector('.password');
const email = document.querySelector('.email');

const frstnameerr = document.querySelector('.firstNameError');
const lstnameerr = document.querySelector('.lastNameError');
const usernameerr = document.querySelector('.userNameError');
const pswderr = document.querySelector('.passwordError');
const emailerr = document.querySelector('.emailError');

form.addEventListener('submit', submitted)

function submitted(event){
  event.preventDefault();
  frstnameerr.style.display = 'none';
  lstnameerr.style.display = 'none';
  usernameerr.style.display = 'none';
  emailerr.style.display = 'none';
  pswderr.style.display = 'none';

  const firstnameinput = frstname.value;
  if (firstnameinput === '') {
    frstnameerr.style.display = 'block';
    frstnameerr.innerText = 'This field is required';
    
    return;
  } 

  const lstinput = lstname.value;
  if (lstinput === '') {
    lstnameerr.style.display = 'block';
    lstnameerr.innerText = 'This field is required';
    
    return;
  } 

  const usernameinput = usname.value;
  if (usernameinput === '') {
    usernameerr.style.display = 'block';
    usernameerr.innerText = 'This field is required';
    
    return;
  } 

  const emailinput = email.value;
  if (emailinput === '') {
    emailerr.style.display = 'block';
    emailerr.innerText = 'This field is required';
    return;
  } 

  const pswdinput = pswd.value;
  if (pswdinput === '') {
    pswderr.style.display = 'block';
    pswderr.innerText = 'This field is required';
    return;
  } 
  alert('form submitted');


  //clear value
  frstname.value = "";
  lstname.value = "";
  usname.value = "";  
  email.value = "";
  pswd.value = "";

}
