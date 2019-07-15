const {Pool} = require('pg');

// const client = new Pool({
//   host: 'ec2-18-232-70-237.compute-1.amazonaws.com',
//   database: 'reviews',
//   user: 'david',
//   // password: 'ubuntu'
//   // max: 5
// });



const client = new Pool({
  host: 'localhost',
  database: 'reviews',
  username: 'david',
  // password: ''
  // max: 5
});
client.connect().then(() => console.log('psql connetion made')).catch(err => console.error(err))

// client.query(`create table "RestaurantReviews"("restaurantID" int,"restaurantRating" int, "text" text,cuisine varchar(15),date text)`, (err, res) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('success')
//   }
// });

const getAllRestaurantReviews = (req, res) => {
  //  let randomRestNumber = Math.floor(Math.random() * 10000000) + 1;
    let restaurantID = req.query.q;
    let text = `select * from "RestaurantReviews" where "restaurantID" = $1`;
    client.query(text, [restaurantID], (err, data) => {
      if (err) {
        res.status(404).send(err)
      } else {
        res.status(200).send(data.rows)
      }
    })
  }

const postReviews = (req, res) => {
  let {restaurantID, restaurantRating,text,cuisine,date} = req.body;
  client.query(`insert into "RestaurantReviews"("restaurantID","restaurantRating",text,cuisine,date) values(${restaurantID}, ${restaurantRating},"${text}","${cuisine}","${date}")`, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send('review posted')
    }
  })
}

const updateReview = (req, res) => {
  let {id} = req.params;
  let {text, date} = req.body
  client.query(`update "RestaurantReviews" set text=(${text}), date=(${date}) where id=(${id})`, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send('review updated')
    }
  })
}

const deleteOneReview = (req, res) => {
  let {id} = req.params;
  
  client.query(`delete from "RestaurantReviews" where id=(${id})`, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send('review deleted')
    }
  })
}

module.exports = {
  getAllRestaurantReviews,
  postReviews,
  updateReview,
  deleteOneReview
}