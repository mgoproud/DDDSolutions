
const serviceBorder = document.querySelector('.services');
const contactLink = document.querySelector('.contact');
const dropDownContact = document.querySelector('.contact-drop');
const emailIcon = document.querySelector('.email-icon');
const emailText = document.querySelector('.email-text');
const visible = document.getElementById('visible');
const navList = document.querySelector('.nav-list');

// servicesBorder.addEventListener('onload', () => {

//     servicesBorder.style.borderBottom = '1px dotted #e2f4ff2c';
// });

// serviceBorder.style.display = 'none';
// serviceBorder.style.borderBottom = '1px dotted #e2f4ff2c';

contactLink.addEventListener('mouseenter', () => {
    dropDownContact.style.display = 'inline';
});

// contactLink.addEventListener('mouseleave', () => {
//     dropDownContact.style.display = 'none';
// });

navList.addEventListener('mouseenter', () => {
    dropDownContact.style.display = 'none';
});

// contactLink.addEventListener('mouseenter', () => {
//     dropDownContact.classList.add('contact-appear');
// });

// visible.addEventListener('mouseleave', () => {
//     dropDownContact.classList.toggle('contact-appear');
// });

emailIcon.addEventListener('click', () => {
    emailText.style.display = 'inline-block';
    dropDownContact.style.marginLeft = '-405px';

})
