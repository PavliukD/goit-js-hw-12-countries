import countryCard from "../templates/onecountry.hbs"
import countriesList from '../templates/countrieslist.hbs'
import fetchError from './fetchError'


const countryFinderResults = document.querySelector('.results')

export default function dataChecking(data) {
    let text = ''
  if (data.length === 1) {
      oneCountryCard(data)
      return
  } else if (data.length <= 10) {
      countriesSerch(data)
      return
  } else if (data.length > 10) {
    countryFinderResults.innerHTML = ''
    text = 'Too many matches found. Please enter more specific query!'
      fetchError(text)
      return
  } else {
    countryFinderResults.innerHTML = ''
    text = 'Oops, something went wrong. Try it again.'
    fetchError(text)
  }
}

function oneCountryCard(country) {
  countryFinderResults.innerHTML = ''
  countryFinderResults.insertAdjacentHTML('beforeend', countryCard(country))
}

function countriesSerch(countries) {
  countryFinderResults.innerHTML = ''
  countryFinderResults.insertAdjacentHTML('beforeend', countriesList(countries))
}

