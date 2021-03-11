
// Below takes user input of cat name and converts it to id creteria needed for teh search by name.
let name = process.argv.slice(2);
name = name[0].split('');
name = name.splice(0,4);
name = name.join('').toLocaleLowerCase();

// TODO: maybe put below in a functio later 

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, function (error, response, body) {
  
   // Print the error if one occurred
  if(error){
   return console.error('error:', error);
  }

  const bodyJsonData = JSON.parse(body); // < --- changes data which is in string form to a JSON object
  
  
  const breed = bodyJsonData[0]; // < --- bodyJasonData

  if(breed){
    console.log(breed.description);
  } else {
    console.log('Breed not found');
  }




  // console.log(`\n ${bodyJsonData[0].description} \n`);

});
