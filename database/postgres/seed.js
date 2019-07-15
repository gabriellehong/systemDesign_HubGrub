const fs = require('fs');
const ReviewGenerator = require('./ReviewDataGenerator.js');
const wstreamReview = fs.createWriteStream('Review.csv');


let ReviewColumns = 'restaurantID,restaurantRating,text,cuisine,date\n';

async function ReviewSeed() {
  // for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 10000000; j++) {
      if (!wstreamReview.write(ReviewGenerator(1))) {
        await new Promise(resolve => wstreamReview.once('drain', resolve))
      }
    }
  // }
}

wstreamReview.write(ReviewColumns, ReviewSeed)