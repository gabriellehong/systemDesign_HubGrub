// const dbhelpers = require('../../database/mongo/dbhelpers.js');
const db = require('../../database/mongo/index.js');



const controller = {
  getAllRestaurantReviews: (req, res) => {
    db.getReviews(req, res)
  },
  postReview: (req, res) => {
    db.postReviews(req, res)
  },
  updateReview: (req, res) => {
    db.updateReview(req,res)
  },
  deleteOneReview: (req, res) => {
    //     // dbhelpers.deleteOneReview
    res.send('delete works')
  },
  deleteAllRestaurantReviews: (req, res) => {
    //       // dbhelpers.deleteAllRestaurantReviews
    res.send('delete all works')
  }
}

module.exports = controller;