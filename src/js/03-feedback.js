import throttle from 'lodash.throttle';
import { common } from './common';

const formData = {};

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input')

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onTextareaInput, 500));

form.addEventListener('input', evt => {
    // console.log(evt.target.name);
    // console.log(evt.target.value);
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(common.KEY_FORM, JSON.stringify(formData));
    console.log(formData);
})

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(common.KEY_FORM);
};


function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(common.KEY_FORM, JSON.stringify(formData));

};


function populateTextarea() {
    const savedMassege = localStorage.getItem(common.KEY_FORM);
    if (savedMassege) {
        console.log(savedMassege)
    }
    textarea.value = savedMassege;
}