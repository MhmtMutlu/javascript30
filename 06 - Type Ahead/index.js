
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(response => response.json())
  .then(json => cities.push(...json));

const inputDOM = document.querySelector(".search")
const ulDOM = document.querySelector(".suggestions")

function filteredCities(searchedWord, cities) {
  return cities.filter(place => {
    const regex = new RegExp(searchedWord, "gi")
    return place.city.match(regex) || place.state.match(regex)
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function displayFilteredCities() {
  const filteredArray = filteredCities(this.value, cities);
  const html = filteredArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span>${cityName}, ${stateName}</span>
        <span>${numberWithCommas(place.population)}</span>
      </li> 
    `
  }).join("")
  ulDOM.innerHTML = html
}

inputDOM.addEventListener("input", displayFilteredCities)

