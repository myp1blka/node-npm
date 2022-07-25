const fs = require('fs');
const moment = require('moment'); 
const weather = require('weather-js');

let addInfoToFile = "";
const init = async () => {
  weather.find({search: 'Kyev, UA', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
    //console.log(result);
    console.log(' ===  ===  ===  ===  ===  ===  ===  ===  ===  ===  ===  ===  ===  ===  ===  ===  === ');

    addInfoToFile += `
    у ${result[0].location.name} , сьогодні ${result[0].current.temperature} градусів
    `;
    console.log(addInfoToFile);

    fs.writeFile(`${moment().format('X')}.log`, `${addInfoToFile}`, function (err){
    if (err) throw err;
    console.log('File is created successfully.');
    });
  });
}

init();




// Когда использовать node start а когда npm start
// как работать с бибдиотекой moment




