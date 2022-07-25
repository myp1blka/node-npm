const fs = require('fs');
const moment = require('moment'); 
const weather = require('weather-js');
const init = async () => {

    let myWeather = weather.find({search: 'Kyev, UA', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        console.log(result);
        console.log(' === ');
        console.log(result[0].location.name);
      });

      console.log("1111111111111" + myWeather[0].data);
       let addInfoToFile = `у`;
    //    ${myWeather[0].location.name} , сьогодні 
    //    ${myWeather[0].current.temperature} градусів
    //    `;


    await fs.writeFile(`${moment().format('X')}.log`, `${addInfoToFile}`, function (err){
        if (err) throw err;
        console.log('File is created successfully.');
      });
    console.log('it work');
}
init();




// Когда использовать node start а когда npm start
// как работать с бибдиотекой moment




