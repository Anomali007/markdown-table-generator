const fs = require('fs');

let countries = require('./../examples/countries.json');

// Check if data is available
if (countries) {
  // For loop through countries
  for (let i = 0; i < countries.length; i++) {
    // Set variable for current country and country name
    let country = countries[i];
    let countryName = countries[i]["country"];

    // Set Section Headers
    let fileName = `${countryName}.html`;
    // pass variable into checkSections 

  }


} else {
  console.log('No Country Data Found. ')
}

function chechSections(country) {
  // Check if sections are available
  if (country.sections.length > 0) {
    console.log('country sections available for ', countryName);
    // Loop through sections
    for (let i = 0; i <= country["sections"].length; i++) {
      // Define Section title and Section Subtitle
      let sectionTitle = country["sections"][i]["title"];
      let sectionSubtitle = country["sections"][i]["subtitle"];
      // Check section for tables
      console.log("sectionTitle: ", sectionTitle, "sectionSubtitle: ", sectionSubtitle)
    }
  } else {
    console.log('No Country Sections Found')
  }
}