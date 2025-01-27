let form = document.getElementById('contact-form');
 
form.addEventListener('submit', function (event) {
  event.preventDefault();
 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const postcode = document.getElementById('postcode').value;
 
  let isValid = true;
  let errorMessage = '';
 
  if (name === '') {
    isValid = false;
    errorMessage += 'Name is required.\n';
  }
 
  if (email === '') {
    isValid = false;
    errorMessage += 'Email is required.\n';
  }
 
  const mailto = `mailto:example@example.com?subject=Enquiry}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n Address: ${address}\n${postcode}\n\nMessage:\n`
  )}`;
 
  if (!isValid) {
    alert(errorMessage);
  } else {
    form.action = mailto;
    form.submit();
    //alert('Form submitted successfully!');
  }
});