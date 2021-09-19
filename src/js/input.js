import fetchCountries from './fetchCountries'
import fetchError from './fetchError'
import dataChecking from './renderElements'

var debounce = require('lodash.debounce')

const input = document.querySelector('.input')

input.addEventListener('input', debounce(inputHandler, 500))


 export default function inputHandler(e) {
   if (e.target.value.length === 0) {
    const text = 'Nothing found. Please enter another request.'
    fetchError(text)
    return
  }
  fetchCountries(e.target.value).then(dataChecking)
}