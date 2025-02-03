let form = document.getElementById('contact-form');
 
form.addEventListener('submit', function (event) {
  event.preventDefault();
 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
 
  form.action += ' ' + name + '&cc=' + email;
  let formatCheck = containsNum(name);
 
  if (!name == '' && !formatCheck && !email == '') {
    //document.getElementById('submit-btn').innerHTML = 'Submitted!';
    form.submit();
  } else {
    //document.getElementById('submit-btn').innerHTML = 'Incorrect Format';
    console.error('error form not validated :)');
  }
});
 
function containsNum(str) {
  return /\d/.test(str);
}
 