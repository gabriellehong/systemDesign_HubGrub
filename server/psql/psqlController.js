// const dbhelpers = require('../../database/postgres/dbhelpers.js');
// const Review = require('../../database/postgres/model.js');
const db = require('../../database/postgres/index.js');


const controller = {
  getAllRestaurantReviews: (req,res) => {
    db.getAllRestaurantReviews(req, res);
  },
  postReviews: (req, res) => {
    db.postReview(req, res);
  },
  // deleteOneReview: (req, res) => {
  //   let {reviewID } = req.body
  //   dbhelpers.deleteReview({reviewID}, {reviewID})
  //     .then(() => res.status(200).send('review deleted'))
  //     .catch(err => res.status(404).send(err))
  // }
  updateReview: (req, res) => {
    db.updateReview(req, res);
  },
  deleteOneReview: (req, res) => {
    db.deleteOneReview(req, res)
  }
}

module.exports = controller;