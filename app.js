

const fs = require('fs');
const moment = require('moment'); 

const init = async () => {

    await fs.writeFile(`${moment().format('X')}.log`, `Погода в Києві`, function (err)    {
        if (err) throw err;
        console.log('File is created successfully.');
      });


    console.log('it work');
}


init();




