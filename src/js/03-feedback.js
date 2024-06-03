import throttle from 'lodash.throttle';
import { common } from './common';


const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormInput(event) {
    let formInfo = localStorage.getItem(common.KEY_FORM);
    // formInfo = JSON.parse(formInfo) ?? {};
    formInfo = formInfo ? JSON.parse(formInfo) : {};
    formInfo[event.target.name] = event.target.value;
    localStorage.setItem(common.KEY_FORM, JSON.stringify(formInfo));
    console.log(formInfo);
}

function populateForm() {
    let savedInfo = localStorage.getItem(common.KEY_FORM);
    if (savedInfo) {
        savedInfo = JSON.parse(savedInfo);
        Object.entries(savedInfo).forEach(([key, text]) => {
            form.elements[key].value = text || '';
        });
    }
}



function onFormSubmit(evt) {
    evt.preventDefault();
    const {
        elements: { email, message },
    } = evt.currentTarget;
    if (email.value === '' || message.value === '') {
        return alert('fill all the fields');
    } else {
        let formData = JSON.parse(localStorage.getItem(common.KEY_FORM));
        console.log(formData);
        evt.currentTarget.reset();
        localStorage.removeItem(common.KEY_FORM);
        formData = {};
    }

};








