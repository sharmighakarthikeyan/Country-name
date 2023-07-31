const countriesWrapper = document.querySelector('.countries-wrapper');
countriesWrapper.innerHTML = '';


fetch('https://restcountries.com/v2/all')
.then(result=>result.json())
.then(data=>
  {
   data.forEach((currentCountry)=>
   {

    
    const div = document.createElement('div');
    div.classList.add('country-container');

    //array
    let languagesname=[];
    currentCountry.languages.forEach((language)=>
    {
languagesname.push(language.name)
      })
     
 div.innerHTML = `
      <img src="${currentCountry.flag}" alt="${currentCountry.name}">
      <p class="country-name">${currentCountry.name}</p>
      <p class="country-capital">Capital: ${currentCountry.capital}</p>
      <p class="country-languages">Region: ${Object.values(currentCountry.subregion.split(", "))}</p>
      <p class="country-population">Population: ${currentCountry.population.toLocaleString('en-IN')}</p>
      <p class="country-languages">language: ${languagesname.split("")}</p>
    `


    countriesWrapper.append(div);

   })
  })
