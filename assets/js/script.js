'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}

/*=================EMAIL JS============ */
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value 
  if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
    contactMessage.classList.remove('color-blue');
    contactMessage.classList.add('color-red');
    contactMessage.textContent = ' Write all the input fields ⌨️';
  } else {
    emailjs.sendForm('service_8ucazfb', 'template_spdqhte', '#contact-form', 'O4UYH-yLr9yuDaVI3')
      .then(() => {
        contactMessage.classList.remove('color-red');
        contactMessage.classList.add('color-blue');
        contactMessage.textContent = 'Message sent ✅';
        
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
      })
      .catch((error) => {
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');
        contactMessage.textContent = 'Failed to send message ❌';
        console.error('EmailJS error:', error);
      });
  }
};

contactForm.addEventListener('submit', sendEmail);
