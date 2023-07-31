

function addCountries(countriesObject) //countries_data
{
  //select the class to delete the items
  const countriesWrapper = document.querySelector('.countries-wrapper');
  countriesWrapper.innerHTML = '';

  Object.values(countriesObject).forEach(currentCountry => 
    {
      // create a div tag and add class
    const div = document.createElement('div');
    div.classList.add('country-container');




    div.innerHTML = `
      <img src="${currentCountry.flag}" alt="${currentCountry.name}">
      <p class="country-name">${currentCountry.name}</p>
      <p class="country-capital">Capital: ${currentCountry.capital}</p>
      <p class="country-languages">Languages: ${currentCountry.languages.join(', ')}</p>
      <p class="country-population">Population: ${currentCountry.population}</p>
    `

    countriesWrapper.append(div);
  });
}

addCountries(countries_data);  // call the function 

const inputToSearch = document.querySelector('input');

inputToSearch.addEventListener('input', (event) => 
{

  const text = event.target.value.split();

  

  const regExp = new RegExp(text, 'gi');

  // Filter countries based on the search input
  const currentResults = Object.values(countries_data).filter(country => country.name.match(regExp));

  // Show the matching countries or display the message
  if (currentResults.length > 0) 
  {
    addCountries(currentResults);

    // Arrange in line
    const sortedCountries = currentResults.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });

    addCountries(sortedCountries);
  }
   else 
   {
    const countriesWrapper = document.querySelector('.countries-wrapper');
    countriesWrapper.innerHTML = '';

    const messageElement = document.createElement('div');
    messageElement.textContent = 'Country not found';
  
    countriesWrapper.append(messageElement);
  }
});
let countrycontainer=document.querySelector(".country-container");
let divtag=document.querySelector(".divtag");

