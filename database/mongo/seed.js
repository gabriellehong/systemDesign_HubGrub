const generator = require('./mockdata.js');
// const ReviewList = require('./model.js');
const fs = require('fs');

const wstream = fs.createWriteStream('ReviewData.json');

// let counter = 0;
// let idcounter = 0;
// async function seed () {
//   while (counter < 50) {
//     data = generator(200000, idcounter);
//     try {
//       await ReviewList.insertMany(data)
//       counter++;
//       idcounter+=200000;
//     } catch (err) {
//       console.log(err)
//       process.exit()
//     }
//   }
//   console.log('done')
//   process.exit()
// }


async function seed() {

  for (let i = 1; i <= 5; i++) {
    for (var j = 1; j <= 10000000; j++) {
      
      if (!wstream.write(JSON.stringify(generator(1, j)) +  (i === 5 && j === 10000000 ? ']' : ','))) {
        await new Promise(resolve => wstream.once('drain', resolve))
      }
    }
    counter++
  }
}

wstream.write('[', seed)