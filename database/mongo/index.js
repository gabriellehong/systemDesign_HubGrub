// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// let dbo;

// MongoClient.connect(url, { useNewUrlParser: true }, function (err, database) {
//   if (err) {
//     console.log(`there's an error ${err}`);
//   } else {
//     console.log('mongo connection made');
//     dbo = database.db('restReviews').collection('reviewlists');
//   }
// })

// const getReviews = (req, res) => {
//   let randomNumber = Math.floor(Math.random() * 10000) + 1;
//   dbo.find({ restaurantID: randomNumber }).toArray((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   })
// }

// let postReviews = (req, res) => {
//   let { restaurantID, restaurantRating, review, type, date } = req.body
//   dbo.insert({restaurantID, restaurantRating, review, type, date}, (err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send('review posted')
//     }
//   })
// }

// let updateReview =(req, res) => {
//   let { reviewID} = req.params;
//   let {restaurantID, restaurantRating, review, type, date} = req.body

//   dbo.findOneAndUpdate({reviewID}, {$set: {restaurantID, restaurantRating, review, type, date}}, (err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send('review updated')
//     }
//   })
// }

// module.exports = {
//   getReviews,
//   postReviews,
//   updateReview
// }