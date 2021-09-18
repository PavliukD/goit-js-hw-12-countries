import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

var debounce = require('lodash.debounce')


const input = document.querySelector('.input')


input.addEventListener('input', debounce(inputHandler, 500))


function inputHandler(e) {
  fetchCountries(e.target.value).then(dataChecking)
}

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
    return response.json()
  }).catch()
}

function dataChecking(data) {
  if (data.length === 1) {
    return console.log('найдена 1 страна')
  } else if (data.length < 10) {
    return console.log('ну типа да, но нет')
  } else {
    error({
      text: 'Too many matches found. Please enter more specific query!'
    })
  }
}
