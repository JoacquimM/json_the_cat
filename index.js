const {fetchBreedDescription} = require('./breedFetcher.js');  // < ---- importing the function 
let name = process.argv.slice(2);   // < --- get breed name
name = name[0].split('');
name = name.splice(0,4);
name = name.join('').toLocaleLowerCase();
const breedName = name;

fetchBreedDescription(breedName, (error, desc) => { // <--- calling function passing in breed name from user giving a callback function (error , desc)
  // const bodyJsonData = JSON.parse(body); // < --- changes data which is in string form to a JSON object
  // const breed = bodyJsonData[0]; // < --- bodyJasonData
  
  if (error) {
    // if the request fails return error status
    console.error('error:', error);
  } else {
    console.log("Description :", desc);
  }
});

