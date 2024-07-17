const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};
populateForm();
form.addEventListener('input', function(event) {
       if(event.target.name === 'email' || event.target.name === 'message') {
           formData[event.target.name] = event.target.value;
           localStorage.setItem('feedback-form-state', JSON.stringify(formData).trim());
       }
});

function populateForm() {
       let savedFormData = localStorage.getItem('feedback-form-state');
       if(savedFormData) {
           formData = JSON.parse(savedFormData);
           document.querySelector('[name="email"]').value = formData.email;
           document.querySelector('[name="message"]').value = formData.message;
       }
   };

form.addEventListener('submit', function (event) {
    event.preventDefault();
       if(formData.email === '' || formData.message === '') {
           console.log('Fill please all fields');
       } else {
           console.log(formData);
           localStorage.removeItem('feedback-form-state');
           formData = { email: "", message: "" };
           document.querySelector('[name="email"]').value = '';
           document.querySelector('[name="message"]').value = '';
          }
  localStorage.removeItem('feedback-form-state');

  event.currentTarget.reset();
   });